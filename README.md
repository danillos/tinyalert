TinyAlert
===========

Tiny and simple alert with Mootools and CSS3 only. (js only ~1.4k uncompressed)

How to use
----------

Include on head:

	<script src="mootools-1.2.4+-core.js" type="text/javascript"></script>
	<script src="tiny_alert.js" type="text/javascript"></script>
	<link rel="stylesheet" href="tiny_alert.css" type="text/css">

Simple example:

	var b = new TinyAlert();
	b.show('Title','Your message');
	
Creating your skins Styles:

	/*Main TinyAlert block style.*/
	#skbubble > div.skinName {

	}

	/*Title style.*/
	#skbubble > div.skinName > span.tatitle{

	}

	/*Message style.*/
	#skbubble > div.skinName > span.tamsg{

	}


	
See Demo and Documentation for more detail.

[DEMO](http://www.danillocesar.com.br/labs/tinyalert "TinyAlert DEMO") | [DOCUMENTATION](http://github.com/danillos/tinyalert/blob/master/Docs/TinyAlert.md "View Documentation") | [DOWNLOAD](http://github.com/danillos/tinyalert/downloads)

TODO
----

* Independent position

