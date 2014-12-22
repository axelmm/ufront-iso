package;
import haxe.ds.StringMap;


/**
 * Iso
 * @author 
 */
class Iso 
{
	public static var UF_ISO_TYPE:String = 'UF_ISO_TYPE';
	public static var REQ_TYPE_CLIENT:String = 'CLIENT';
	public static var REQ_TYPE_SERVER:String = 'SERVER';
	
	#if js
	public static var stateChangeCount:Int = 0;	
	public static function isFirstRequest():Bool return ++stateChangeCount <= 1;
	public static var contentCache = new StringMap<String>();	
	public static function initCache() {
				var contentEl = js.Browser.document.getElementById('content');
				if (contentEl == null) {
					throw('Could not init contentCache on first request');
					return;
				}
				var content = contentEl.innerHTML;
				var url = js.Browser.window.location.pathname;
				contentCache.set(url, content);
	}
	#end
}

