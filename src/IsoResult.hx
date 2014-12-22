package;
import haxe.Template;

#if  Server
import sys.io.File;
#end
import ufront.core.Sync;
import ufront.web.context.ActionContext;

/**
 * IsoResult
 * @author Jonas Nyström
 */
 
 // The IsoResult is a simple standard ActionResult, that takes the content and writes it to the response object
 // The only iso-specific thing here is that when it's run on the server, it can identify if the request is an ajax request by checking a header flag
  
 // When run on the client, it just passes along the content part of the page
 // Likewise, when run on the server and identified as an ajax request, it just passes along the content part
 // However , if it's a server request without the ajax flag being set - it is considered as a standard server request. In this case
 // the content part is wrapped into a page template
  
class IsoResult  extends ufront.web.result.ActionResult
{
	var content:String;
	
	public function new(content:String) 
	{
		this.content = content;
	}
	
	override public function executeResult( actionContext:ActionContext ) {			
		var content = this.getContent(actionContext);
		actionContext.httpContext.response.write(content);
		return ufront.core.Sync.success();						
	}
	
	private function getContent(actionContext:ActionContext) {		

			#if Server
				// Check if it is a standard request or an ajax request
				var requestType = actionContext.httpContext.request.clientHeaders.get(Iso.REQUEST_TYPE);
				
				// If it isn't an ajax request...
				if  (requestType != Iso.AJAX) {
					// load the html template
					var template = new Template(File.getContent(Sys.getCwd() + 'app/template.html'));
					// and wrap the content into a template
					return  template.execute( { content: this.content } );			
				}
			#end
			
			// This will happen
			// - when run on server as an ajax call
			// - when run on client
			return this.content;
	}
	
}