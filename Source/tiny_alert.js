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
(function($){
	this.TinyAlert = new Class({
		initialize: function(opt) {
			if(!opt) opt = {};
			this.skin = opt.skin || 'blue';
			this.delay = opt.delay || 3000;
			this.pos = opt.position || 'tr'; 
			this.block = $('tinyalert');
			if(this.block) return;
			this.block = new Element('div',{'id': 'tinyalert'});
			this.block.inject(opt.el || document.body);
		},

		show: function(title,msg,img,callback) {
			this.block.set('class',this.pos);
			var i = "";
			if(img) i = '<img src="'+img+'" />';
			var b = new Element('div',{
				'html' : '<span class="tatitle">'+title+'</span><span class="tamsg">'+msg+'</span>'+i,
				'class' : this.skin
			});
			
			b.addEvent('click',function(){
				if(callback) callback.run();
				this.close(b);
			}.bind(this));
			
			b.setStyle('opacity',0);
			b.inject(this.block,(this.pos == 'br' || this.pos == 'bl') ? 'top':'bottom');
			
			var fx = new Fx.Tween(b,{duration:250});
			b.store('fx',fx);
			fx.addEvent('complete',function(){b.set('style','');});
			fx.start('opacity',1);
			this.close.delay(this.delay,this,b);
		},
		
		close: function(b) {
			var fx = b.retrieve('fx');
			if(!fx) return;
			fx.addEvent('complete',function(){b.destroy();});
			fx.start('opacity',0);
		}
	});
})(document.id);