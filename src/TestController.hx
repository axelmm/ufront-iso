package;
import tink.core.Error;
import tink.core.Future;
import tink.core.Outcome;
import ufront.web.result.ContentResult;

/**
 * TestController
 * @author Jonas Nyström
 */

class TestController extends  ufront.web.Controller {
	
	@:route( '/' ) public function index() return new IsoResult("<h1>Home</h1>");
	@:route( '/home' ) public function home() return index();
	@:route( '/jedi' ) public function jedi()  return  new IsoResult("<h1>Jedi</h1>");
	@:route( '/giraffe' ) public function giraffe()  return  new IsoResult("<h2>giraffe</h2>");
	@:route( '/iso/*' ) public var isoController:MainController;
	
	
	
	/*
	function simulatedAsyncProcess(): Surprise<ContentResult, Error> {
		var f = Future.trigger();		
		
		#if (neko) Sys.sleep(1); #end
		if (Random.bool()) 
			f.trigger(Success(new ContentResult('This is the result from a simulated async success! :-)')));	
		else 
			f.trigger(Failure(new Error('This is a simulated async error - happens every second time...')));
		
		return f.asFuture();
	}
	*/
	
}