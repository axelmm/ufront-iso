package;
import haxe.ds.StringMap;
import tink.core.Error;
import tink.core.Future;
import tink.core.Outcome;
using Detox;
using StringTools;
/**
 * IsoController
 * @author 
 */
class MainController extends  ufront.web.Controller {	
	
	@:route( '/' ) public function index() return loadContent(this.context.request.uri);	
	@:route( '/home' ) public function home() return index();
	@:route( '/nops' ) public function noPS() return new IsoResult('<div class="page-header"><h1>No pushstate</h1></div><p>This is a standard request - no pushstate is used here</p>') ;
	@:route( '/info' ) public function info() return  loadContent(this.context.request.uri);
	
	@:route( '/contact/', GET ) public function contact() return new IsoResult("<div class='page-header'><h1>Contact</h1></div><p>The form submit is handled just as a normal server request - no pushstate or isometric stuff.</p><form method='POST' action='/contact/'><div class='col-xs-3'><p>Name:<br/><input name='name' class='form-control'/></p><p>Age:<br/><input name='age' class='form-control' /></p><input type='submit'/></div></form>");
	@:route( '/contact/', POST ) public function contactPost( args: { ?name:String, ?age:Int}) return new IsoResult("<div class='page-header'><h1>Contact Post</h1></div>" + Std.string(args)); 
	
	//===========================================================================
	// Model stuff here
	// Should be factorzed away in a best practices web mvc manner, I guess...
	//
	#if Client
	// The client uses a simple cahing mechanism for storing the content so that it could be reused when navigating back through the pushstate controlled browser history
	// 
	function loadContent(uri:String):Surprise<IsoResult, Error> {
		
			this.ufTrace(uri);
		
			var f = Future.trigger();		
	
			// First, check if the content has been cached:			
			
			if (Iso.contentCache.exists(uri)) {
				
				// Get content from client cache
				var cachedContent = Iso.contentCache.get(uri);
				var content = cachedContent;
				f.trigger(Success( new IsoResult( content)));
				Iso.setLoadinfoLabel('PushState - Loaded from cache', 'label label-warning');
				
			} else {	 // If not in the cache, load it by ajax 
				
				this.ufTrace('Load from ' + uri);
				var request = new js.html.XMLHttpRequest(); 
				request.open('GET', uri);
				
				// Set the request header tag UF-ISO-TYPE to 
				request.setRequestHeader(Iso.REQUEST_TYPE, Iso.AJAX);
				request.onload = function (e) {
					var requestResponse = request.response;
					var content = requestResponse;
					Iso.contentCache.set(uri, requestResponse);
					f.trigger(Success(new IsoResult( content) ));
					Iso.setLoadinfoLabel('PushState - Loaded using ajax', 'label label-success');
				};		
				request.onerror = function(e) {			
					  f.trigger(Failure(new Error('Can\' load from $uri'))); 		
				}
				
				// Timer can be used to simulate a slow ajax loading
				//haxe.Timer.delay(function() {			
					request.send(null);
				//}, 500);
				
			}

		return f.asFuture();
	}
	#end
	
	#if Server
	function loadContent(uri:String):Surprise<IsoResult, Error> {
		
		var f = Future.trigger();

		// Load stuff from database or whatever
		// Here we just load some simple file content...
		
		if (uri == '/') uri = '/home';
		var filename = Sys.getCwd() +  'app/content$uri.txt';
		if (!sys.FileSystem.exists(filename)) {
			f.trigger( Failure(new Error('Server couldn\'t load content from $filename')));
		} else {
			
			// Sys.sleep can be used to simulate a slow standard request loading
			// Sys.sleep(1) 
			
			var content = sys.io.File.getContent(filename);
			f.trigger(Success( new IsoResult( content)));
		}
		return f.asFuture();
	}
	#end	
	
}

