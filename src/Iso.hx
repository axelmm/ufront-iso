package;
import haxe.ds.StringMap;


/**
 * Iso
 * @author 
 */
class Iso 
{
	public static var requestType:String = 'UF-ISO-TYPE';
	public static var REQ_TYPE_CLIENT:String = 'CLIENT';
	public static var REQ_TYPE_SERVER:String = 'SERVER';
	
	#if js
	public static var stateChangeCount:Int = 0;	
	public static function isFirstRequest():Bool return ++stateChangeCount <= 1;
	public static var cache = new StringMap<String>();	
	public static function initCache() {
				var contentEl = js.Browser.document.getElementById('content');
				if (contentEl == null) {
					throw('Could not init Client cache on first request');
					return;
				}
				var content = contentEl.innerHTML;
				var url = js.Browser.window.location.pathname;
				cache.set(url, content);
	}
	#end
}

