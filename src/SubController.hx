package;

/**
 * SubController
 * @author Jonas Nyström
 */
class SubController extends ufront.web.Controller {
	@:route( '/a' ) function subA() return new  ufront.web.result.ContentResult('This is /sub/a');
	@:route( '/b' ) function subB() return new  ufront.web.result.ContentResult('This is /sub/b');
	@:route( '/*' ) function subElse() return new  ufront.web.result.ContentResult('This is /sub/*');
} 