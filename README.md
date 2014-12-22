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

The very first request is performed by the server. (The only client-side things happening are setting the "active" class for the current menu item - but this could also be done serverside using Jason O'Neils' [Detox](https://github.com/jasononeil/detox)).

Further clicks on menu items are controlled by the client. The pushstate handler ([also a work of Jason's](https://github.com/jasononeil/detox)) prevents performing a server request. Instead the client side ufront instance is kicked off, and handles the page request. This can be done in two ways: If the page is present in the clientside cache, it is served from there. If it isn't, then it is loaded using an ajax request (to the server version of "itself"! :-)

Browser history navigation is taken care of by the client Pushstate wrapper.

You can always do a page refresh for any valid url (for example by clicking F5 in the browser). The page is then fetched from the server and the client app is reloaded.

Thanks
------
All credits to [Jason O'Neil](https://github.com/jasononeil/) (who is maintaining Ufront, Pushstate and Detox), and also [Franco Ponticelli](https://github.com/fponticelli) and [Andreas Söderlund](https://github.com/ciscoheat) who started the ufront project.
