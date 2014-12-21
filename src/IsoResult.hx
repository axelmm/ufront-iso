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
		var html = getContent(actionContext);
		actionContext.httpContext.response.write(html);
		return ufront.core.Sync.success();						
	}
	
	#if js
	private function getContent(actionContext:ActionContext) {		
			var uri = actionContext.httpContext.request.uri;
			return this.content;
	}
	#else
	static var template = {
		new Template(File.getContent(Sys.getCwd() + 'app/template.html'));
	}
	private function getContent(actionContext:ActionContext) {
		var requestType = actionContext.httpContext.request.clientHeaders.get(Iso.requestTypeTag);
		actionContext.httpContext.ufTrace('Request type from header: $requestType');
		var html =  switch requestType {
			case Iso.REQ_TYPE_CLIENT: this.content;
			case _: template.execute( { content: this.content} ); 
		}
		return html;
	}	
	#end
	

	
	
	
	
	
}