package;
import haxe.ds.StringMap;
using Detox;
/**
 * Iso
 * @author 
 */
class Iso 
{
	public static var REQUEST_TYPE:String = 'UF_ISO_TYPE';
	public static var AJAX:String = 'AJAX';
	public static var REQ_TYPE_SERVER:String = 'SERVER';

	// Using Detox, this could be run on both server and client
	public static  function setUI(uri:String) {		
		// Update main menu
		var menu = "#menu".find();
		for (item in menu.first().children()) {							
			var href = item.children().first().attr('href');
			if (href == uri) {
				if(!item.hasClass('active')) item.addClass('active');
			} else {
				item.removeClass('active');	
			}
		}
	}
	
	public static  function setLoadinfoLabel(text:String, clss:String) {
		'#load-type'.find().setText(text);
		'#load-type'.find().setAttr('class', clss);			
	}
	
	#if js
	public static function isFirstRequest():Bool return ++stateChangeCount <= 1 ;
	public static var stateChangeCount:Int = 0;	
	public static var contentCache = new StringMap<String>();	
	public static function addFirstRequestToCache() {
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


