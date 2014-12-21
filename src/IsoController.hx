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
class IsoController extends  ufront.web.Controller {	
	
	@:route( '/' ) public function iso() return  getContent(this.context.request.uri);
	@:route( 'test' ) public function isotest() return getContent(this.context.request.uri);
	
	function getContent(uri:String):Surprise<IsoResult, Error> {
	
			var f = Future.trigger();		
			
			#if js
			if (!Iso.contentCache.exists(uri)) {
				// Ajax load content
				'#load-type'.find().setAttr('class', "label label-success").setText('PushState - ajax');
				this.ufTrace('Load from ' + uri);
				var request = new js.html.XMLHttpRequest(); 
				request.open('GET', uri);
				request.setRequestHeader(Iso.requestTypeTag, Iso.REQ_TYPE_CLIENT);
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
			} else {
				// Get content from client cache
				'#load-type'.find().setAttr('class', "label label-warning").setText('PushState - cache');
				var cachedContent = Iso.contentCache.get(uri);
				var content = cachedContent;
				f.trigger(Success( new IsoResult( content)));
			}
		#else
			var filename = 'app/content$uri.txt';
			if (!sys.FileSystem.exists(filename)) {
				f.trigger( Failure(new Error('Server couldn\'t load content from $filename')));
			} else {
				var content = sys.io.File.getContent(filename);
				f.trigger(Success( new IsoResult( content)));
			}
		#end

		return f.asFuture();
	}
}



