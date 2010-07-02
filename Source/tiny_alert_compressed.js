/*
---
description: TinyAlert - Tiny and simple alert with Mootools and CSS3 only.

license: MIT-style

authors:
- Danillo César de O. Melo

requires:
- core/1.2.4: '*'

provides: TinyAlert	

...
*/
var TinyAlert;(function(){$=document.id;TinyAlert=new Class({initialize:function(a){if(!a){a={}}this.skin=a.skin||"blue";this.delay=a.delay||3000;this.pos=a.position||"tr";this.block=$("tinyalert");if(this.block){return}this.block=new Element("div",{id:"tinyalert"});this.block.inject(a.el||document.body)},show:function(g,f,c,h){this.block.set("class",this.pos);var d="";if(c){d='<img src="'+c+'" />'}var a=new Element("div",{html:'<span class="tatitle">'+g+'</span><span class="tamsg">'+f+"</span>"+d,"class":this.skin});a.addEvent("click",function(){if(h){h.run()}this.close(a)}.bind(this));a.setStyle("opacity",0);a.inject(this.block,(this.pos=="br"||this.pos=="bl")?"top":"bottom");var e=new Fx.Tween(a,{duration:250});a.store("fx",e);e.addEvent("complete",function(){a.set("style","")});e.start("opacity",1);this.close.delay(this.delay,this,a)},close:function(a){var c=a.retrieve("fx");if(!c){return}c.addEvent("complete",function(){a.destroy()});c.start("opacity",0)}})})();