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
		actionContext.httpContext.response.write( getContent(actionContext));
		return ufront.core.Sync.success();						
	}

	
	#if js
	static var cache:Map<String, String> = new Map<String, String>();
	private function getContent(actionContext:ActionContext) {		
			var uri = actionContext.httpContext.request.uri;
			/*
			var useCache = (cache.exists(uri)) ; 
			useCache = false;
			
			if (useCache) {
				return cache.get(uri)  + '<p>From cache: TEST:$headerTEST</p>';				
			} 			
			cache.set(uri, this.content);
			*/
			return this.content;
	}
	
	/*
	private function loadContentAjax(uri:String) {
		var loader = new XMLHttpRequest();
		loader.open('GET', uri, false);
		loader.addEventListener('load', function(_) {
			var content = loader.response;
		}, false);;
	
	}
	*/
	
	#else
	private function getContent(actionContext:ActionContext) {
		var template = new Template(File.getContent(Sys.getCwd() + 'bin/template.html'));
		return template.execute( { content: this.content} );		
	}	
	#end
}