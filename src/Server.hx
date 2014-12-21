package;


import neko.ufront.web.context.HttpRequest;
import neko.ufront.web.context.HttpResponse;
import neko.Web;
import ufront.app.UfrontApplication;
import ufront.web.context.HttpContext;
import ufront.web.result.RedirectResult;
import ufront.web.UfrontConfiguration;
using StringTools;

class Server 
{
	public static var app:UfrontApplication;
	
	static public function main() {
		init();			
		//Sys.sleep(1); // simulating a slow server...
		app.executeRequest();
		//app.execute(new HttpContext(new HttpRequest(), new IsoServerResponse()));
	}

	static function init() {		
		if ( app==null ) {
			var config:UfrontConfiguration = {
				indexController: TestController,
				//remotingApi: null,
				//contentDirectory: null, 
				//urlRewrite: false,
				basePath: '/',				
			}			
			app = new UfrontApplication(config);
		}
	}	
}

