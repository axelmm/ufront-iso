ufront-iso
==========

Playground to learn [UFront](https://github.com/ufront) and to find out what's possible when it comes to isometric solutions (same code on client and server).

DISCLAIMER: Don't expect anyting but basic experiments here. For the fun of learning and Haxing!

![ufront-iso](/screen.png?raw=true "ufront-iso")

Usage
-----

Download or clone this repo.

Navigate to /ufront-iso/bin and start a neko server pointing to that directory:
`> nekotools server -rewrite`

Surf to `http://localhost:2000`. You shoud see the home screen as above.

Things to note
--------------

The very first request is performed by the server. It loads the page content and wraps it into the page template (bin/template.html). (The only client-side things happening when browser loading is ready are setting the "active" class for the current menu item - but this could also be done serverside using Jason O'Neils' [Detox](https://github.com/jasononeil/detox)!).

Further clicks on menu items are controlled by the client. The pushstate handler ([also a work of Jason's](https://github.com/jasononeil/detox)) prevents performing a server request. (Note that the anchor tags in the bin/template.html has a rel="pushstate" attribute.) Instead the client side ufront instance is kicked off, and handles the page request in one of two ways: If the page is present in the clientside cache, it is served from there. If it isn't, then it is loaded using an ajax request (to the server version of "itself"! :-)

Browser history navigation is taken care of by the client Pushstate wrapper.

You can always do a page refresh for any valid url (for example by clicking F5 in the browser). The page is then fetched from the server and the client app is reloaded.

For further investigation: serverside dom manipulation
------------------------------------------------------
There are more to do when it comes to code sharing. The Detox library makes it possible to actually perform DOM opereations on the servere side in a JQuery-like manner. 
This way, post-browser-load javascript ui adaption etc. coulb be (at least partly) eliminated.

Maybe the whole serverside handling of the html/dom to be served could be handled "virtually" using Detox?

Build
-----

The libraries needed for building this demo are [Detox](https://github.com/jasononeil/detox) (current version 1.0.0-rc2) and [ufront-mvx](https://github.com/ufront/ufront-mvc) (current version 1.0.0-rc9). They can be installed using haxelib:

`> haxelib install ufront-mvc`

`> haxelib install detox`

This will automatically isntall other dependencies, like `tink_core` and `tink_macro`. The Pushstate library is currently included in the /src directory.

Thanks
------
All credits to [Jason O'Neil](https://github.com/jasononeil/) (who is maintaining Ufront, Pushstate and Detox), and [Franco Ponticelli](https://github.com/fponticelli) and [Andreas Söderlund](https://github.com/ciscoheat) who started the ufront project. Also [Juraj Kirchheim](https://github.com/back2dos) for the super userful Tinkerbell library.
