package;

/**
 * Client
 * @author Jonas Nyström
 */
class Client 
{
	public static var app:ufront.app.UfrontApplication;
	static var stateChangeCount = 0;
	static public function main() {		
		init();			
		pushstate.PushState.init();
		pushstate.PushState.addEventListener(function (url) {
			if (++stateChangeCount > 1) {
				js.Browser.document.getElementById('load-type').innerHTML = "This content was a push-state";
				
				//haxe.Timer.delay(function() {
					trace('client-side');
					app.execute(new  ufront.web.context.HttpContext( new ClientRequest(), new ClientResponse()));
				//}, 500);
			}
		});
	}

	static function init() {		
		if ( app==null ) {
			var config:ufront.web.UfrontConfiguration = {
				indexController: TestController,
				basePath: '/',				
			}						
			app = new ufront.app.UfrontApplication(config);
		}
	}
}

class ClientRequest extends  ufront.web.context.HttpRequest {
	public function new() {}	
	override function get_uri() return js.Browser.window.location.pathname;
	override function get_scriptDirectory() return null;
	override function get_httpMethod() return 'GET';
	override function get_clientHeaders() return new ufront.core.MultiValueMap<String>();
	override function get_cookies() return new ufront.core.MultiValueMap<String>();
	override function get_query() return new ufront.core.MultiValueMap<String>();
	override function get_post() return new ufront.core.MultiValueMap<String>();
}

class ClientResponse extends  ufront.web.context.HttpResponse {
	public function new() super();
	override function flush() {				
		js.Browser.document.getElementById('content').innerHTML = _buff.toString();
	}	
}
