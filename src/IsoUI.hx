package;
import ufront.web.context.HttpContext;

using Detox;

/**
 * UI
 * @author 
 */
class IsoUI 
{
	var uri:String;
	public function new(uri:String) {
		this.uri = uri;
	}
	
	public function setUI() {
		setMenuActive();
		setClientLoadType();
	}
	
	function setClientLoadType() 
	{
		'#load-type'.find().setText("PushState");
		'#load-type'.find().setAttr('class', "label label-success");
	}
	
	public function setMenuActive() {
		var menu = "#menu".find();
		for (item in menu.first().children()) {
			item.removeClass('active');
			var href = item.firstChild.attr('href');
			if (href == uri) item.addClass('active');
		}
		return this;
	}
	
}