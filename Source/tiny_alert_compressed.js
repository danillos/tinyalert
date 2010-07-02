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
(function(a){this.TinyAlert=new Class({initialize:function(b){if(!b){b={}}this.skin=b.skin||"blue";this.delay=b.delay||3000;this.pos=b.position||"tr";this.block=a("tinyalert");if(this.block){return}this.block=new Element("div",{id:"tinyalert"});this.block.inject(b.el||document.body)},show:function(h,g,d,j){this.block.set("class",this.pos);var e="";if(d){e='<img src="'+d+'" />'}var c=new Element("div",{html:'<span class="tatitle">'+h+'</span><span class="tamsg">'+g+"</span>"+e,"class":this.skin});c.addEvent("click",function(){if(j){j.run()}this.close(c)}.bind(this));c.setStyle("opacity",0);c.inject(this.block,(this.pos=="br"||this.pos=="bl")?"top":"bottom");var f=new Fx.Tween(c,{duration:250});c.store("fx",f);f.addEvent("complete",function(){c.set("style","")});f.start("opacity",1);this.close.delay(this.delay,this,c)},close:function(c){var d=c.retrieve("fx");if(!d){return}d.addEvent("complete",function(){c.destroy()});d.start("opacity",0)}})})(document.id);