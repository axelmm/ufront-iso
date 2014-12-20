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
	
	@:route( '/' ) public function index() return  new IsoResult("<ul><li>Home</li><li><a href='/staff/John'>Staff: John</a></li><li><a href='/staff/Jane'>Staff: Jane</a></li><li><a href='/contact'>Contact</a></li><li><a href='/pages/a/b/c/d'>Pages/*</a></li><li><a href='/sub/a'>subcontroller /a</a></li><li><a href='/sub/x/y/z'>subcontroller /*</a></li><li><a href='/redirect'>/redirect -> /home</a></li></ul>");
	@:route( '/home' ) public function home() return index();
	@:route( '/muslim' ) public function muslim()  return new IsoResult("<h1>Muslim</h1>");
	@:route( '/christian' ) public function christian()  return  new IsoResult("<h1>Christian</h1>");
	@:route( '/jedi' ) public function jedi()  return  new IsoResult("<h1>Jedi</h1>");
	@:route( '/giraffe' ) public function giraffe()  return  new IsoResult("<h2>giraffe</h2>");
	@:route( '/staff.html' ) public function staff() return "Staff";
	@:route( '/staff/$name/' ) public function viewStaff( name:String ) return 'Staff: $name';
	@:route( '/contact/', GET ) public function contact() return "Contact <form method='POST' action='/contact/'><p>Name:<br/><input name='name' /></p><p>Age:<br/><input name='age' /></p><input type='submit'/></form>";
	@:route( '/contact/', POST ) public function contactPost( args: { ?name:String, ?age:Int}) return 'Contact Post ' + Std.string(args);
	@:route( '/content/*') public function testcontent(rest:Array<String>) return new ufront.web.result.ContentResult(Std.string(rest.join(', ')));
	@:route( '/pages/*' ) public function pageCatchAll( rest:Array<String> ) return new ufront.web.result.ContentResult( Std.string(rest), "text/html" );
	@:route( '/sub/*' ) public var subController:SubController;
	@:route('/redirect') public function redirect() return new ufront.web.result.RedirectResult('/home');
	
	
	@:route('/async') public function async() return simulatedAsyncProcess();
	
	function simulatedAsyncProcess(): Surprise<ContentResult, Error> {
		var f = Future.trigger();		
		
		#if (neko) Sys.sleep(1); #end
		if (Random.bool()) 
			f.trigger(Success(new ContentResult('This is the result from a simulated async success! :-)')));	
		else 
			f.trigger(Failure(new Error('This is a simulated async error - happens every second time...')));
		
		return f.asFuture();
	}
	
}