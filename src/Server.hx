package;


import ufront.app.UfrontApplication;
import ufront.web.result.RedirectResult;
import ufront.web.UfrontConfiguration;


class Server 
{
	public static var app:UfrontApplication;
	
	static public function main() {
		init();			
		//Sys.sleep(1); // simulating a slow server...
		app.executeRequest();
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

