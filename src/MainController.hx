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
	
	@:route( '/' ) public function index() return getIsoContent('/home');	
	@:route( '/home' ) public function home() return index();
	@:route( '/nops' ) public function noPS() return new IsoResult('<div class="page-header"><h1>No pushstate</h1></div><p>This is a standard request - no pushstate is used here</p>') ;
	@:route( '/info' ) public function info() return  getIsoContent(this.context.request.uri);
	
	@:route( '/contact/', GET ) public function contact() return new IsoResult("<div class='page-header'><h1>Contact</h1></div><p>The form submit is handled just as a normal server request - no pushstate or isometric stuff.</p><form method='POST' action='/contact/'><div class='col-xs-3'><p>Name:<br/><input name='name' class='form-control'/></p><p>Age:<br/><input name='age' class='form-control' /></p><input type='submit'/></div></form>");
	@:route( '/contact/', POST ) public function contactPost( args: { ?name:String, ?age:Int}) return new IsoResult("<div class='page-header'><h1>Contact Post</h1></div>" + Std.string(args)); 
	
	//===========================================================================
	// Model stuff
	//
	// Client
	#if js
	function getIsoContent(uri:String):Surprise<IsoResult, Error> {
		
			this.ufTrace(uri);
		
			var f = Future.trigger();		
	
			// First, check if the content has been cached:			
			if (Iso.contentCache.exists(uri)) {
				
				// Get content from client cache
				Iso.displayPushstateLabel('PushState - Loaded from cache', 'label label-warning');
				var cachedContent = Iso.contentCache.get(uri);
				var content = cachedContent;
				f.trigger(Success( new IsoResult( content)));
			} else {
				
				// Load content by XHTTPRequest
				Iso.displayPushstateLabel('PushState - Loaded using ajax', 'label label-success');
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
				};		
				request.onerror = function(e) {			
					  f.trigger(Failure(new Error('Can\' load from $uri'))); 		
				}
				request.send(null);
			}

		return f.asFuture();
	}
	#end
	
	// Server
	#if neko
	function getIsoContent(uri:String):Surprise<IsoResult, Error> {
		
		// Load stuff from database or whatever
		// Here we just load some simple file content...
		var f = Future.trigger();		
			var filename = Sys.getCwd() +  'app/content$uri.txt';
			if (!sys.FileSystem.exists(filename)) {
				f.trigger( Failure(new Error('Server couldn\'t load content from $filename')));
			} else {
				var content = sys.io.File.getContent(filename);
				f.trigger(Success( new IsoResult( content)));
			}
		return f.asFuture();
	}
	#end	
	
}

