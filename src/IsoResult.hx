package;
import haxe.Template;

#if (!js)
import sys.io.File;
#end
import ufront.core.Sync;
import ufront.web.context.ActionContext;

/**
 * IsoResult
 * @author Jonas Nyström
 */
class IsoResult  extends ufront.web.result.ActionResult
{
	var content:String;
	
	public function new(content:String) 
	{
		this.content = content;
	}
	
	override public function executeResult( actionContext:ActionContext ) {			
		actionContext.httpContext.response.write(getContent(actionContext));
		return ufront.core.Sync.success();						
	}
	
	
	private function getContent(actionContext:ActionContext) {		

			#if neko
				// Check if it is a standard request or an ajax request
				var requestType = actionContext.httpContext.request.clientHeaders.get(Iso.REQUEST_TYPE);
				
				// If it isn't an ajax request
				if  (requestType != Iso.AJAX) {
					var template = new Template(File.getContent(Sys.getCwd() + 'app/template.html'));
					// Wrap the content into a template
					return  template.execute( { content: this.content } );			
				}
			#end
			
			// This will happen
			// - When run on server as an ajax call
			// - When run on client
			return this.content;
	}
	
}