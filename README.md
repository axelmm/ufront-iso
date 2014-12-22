ufront-iso
==========

Playground to learn [UFront](https://github.com/ufront) and to find out what's possible when it comes to isometric solutions (same code on client and server).

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
