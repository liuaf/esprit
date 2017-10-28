Ext.define('Esprit.view.auto.AutoController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.automatic',
	
	requires: [
		'Esprit.view.auto.AutomaticCreate'
	],
	
	afterrender: function(view){
		var me = this,
			owner = view.owner;
		if( owner && owner=='farmpark'){
			
			var items = view.items,
				draw = items.items[1],
				surface = draw.getSurface(),
				sprites;
		
			surface.removeAll();
			sprites = me.createWaterFertilizerSystem(surface, {});
			draw.sprites = sprites;//setSprites(sprites);
			surface.add(sprites);
			surface.renderFrame();	
		}
		
		Ext.log('afterrender');
	},
	
	onBtnCreateClick: function( btn, e, eOpts){
		var me = this,
			view = btn.up().up(),
			items = view.items,
			draw = items.items[1],
			surface = draw.getSurface(),
			sprites;
			
		debugger;	
		
		/*
		var win = Ext.create('Esprit.view.auto.AutomaticCreate', {draw: draw, surface: surface});
		win.show();
		*/
			
		surface.removeAll();
		sprites = me.createWaterFertilizerSystem(surface, {});
		draw.sprites = sprites;//setSprites(sprites);
		surface.add(sprites);
		surface.renderFrame();	
		//view.updateFrame();
		
		Ext.log('onBtnCreateClick');
	},
	
	
	
	onBtnSaveClick: function(btn, e, eOpts){
		Ext.log('onBtnSaveClick');
		
	},
	
	onBtnCleanClick: function(btn, e, eOpts){
		
		debugger;
		var me = this,
			view = btn.up().up(),
			items = view.items,
			draw = items.items[1],
			surface = draw.getSurface();
		
		surface.removeAll();
		surface.renderFrame();		
		Ext.log('onBtnCleanClick');
	},
	
	spriteclick: function( item, event ){
		var sprite = item && item.sprite;
		if(sprite){
			var src = sprite.attr.src;
			if(src == 'resources/images/waterfertilizer/magnetic-valve-poweroff.gif'){
				src = 'resources/images/waterfertilizer/magnetic-valve-poweron.gif'
			}else if(src == 'resources/images/waterfertilizer/magnetic-valve-poweron.gif'){
				src = 'resources/images/waterfertilizer/magnetic-valve-poweroff.gif';
			}
			sprite.setAttributes({
				src: src
			});
			sprite.getSurface().renderFrame();
		}
	},	

	spritedbclick: function( item, event ){
		
	},
	
	createWaterFertilizerSystem: function(surface, config){
		var me = this;
		var nbrOfFertlz = 6;
		
		var items = new Array();
		
		var fontsize  = 16,
			fontStyle = '#424242',
			text = '水肥混合泵',
			x = 50,
			y = 25,
			width  = 563,
			height = 300;
		
		var wfpWidth = 189,
			irrpWidth = 166,
			wbWidth = 71,
			fbWidth = 75,
			elmgWidth = 40,
			elmgHeight = 47;
		
		var imgObj = {},
			txtObj = {},
			sprite ;
		
		imgObj.type = 'image';
		imgObj.src  = 'resources/images/waterfertilizer/water-fertilizer-pump.gif';
		imgObj.x 	 = x;
		imgObj.y	 = y;
		imgObj.width  = wfpWidth;
		imgObj.height = height;		
		items.push(this.createWatFerDevice(imgObj));
		
		imgObj.type = 'image';
		imgObj.src  = 'resources/images/waterfertilizer/irr-pump.gif';
		imgObj.x 	 = x+wfpWidth;
		imgObj.y	 = y;
		imgObj.width  = irrpWidth;
		imgObj.height = height;		
		items.push(this.createWatFerDevice(imgObj));
		
		var start = x+wfpWidth;
		for(var i=0; i<nbrOfFertlz; ++i){
			imgObj.type = 'image';
			imgObj.src  = 'resources/images/waterfertilizer/fertilizer.gif';
			imgObj.x 	 = start;
			imgObj.y	 = y;
			imgObj.width  = fbWidth;
			imgObj.height = height;		
			items.push(this.createWatFerDevice(imgObj));
			
			imgObj.type = 'image';
			imgObj.src  = 'resources/images/waterfertilizer/magnetic-valve-poweroff.gif';
			imgObj.x 	 = start+imgObj.width/2-20;
			imgObj.y	 = y+50;
			imgObj.width  = elmgWidth;
			imgObj.height = elmgHeight;		
			items.push(this.createWatFerDevice(imgObj));			
			
			start += fbWidth;
		}
		imgObj.type = 'image';
		imgObj.src  = 'resources/images/waterfertilizer/water-bucket.gif';
		imgObj.x 	 = start;
		imgObj.y	 = y;
		imgObj.width  = wbWidth;
		imgObj.height = height;		
		items.push(this.createWatFerDevice(imgObj));
		
		imgObj.type = 'image';
		imgObj.src  = 'resources/images/waterfertilizer/magnetic-valve-poweroff.gif';
		imgObj.x 	 = start+imgObj.width/2-20;
		imgObj.y	 = y+50;
		imgObj.width  = elmgWidth;
		imgObj.height = elmgHeight;		
		items.push(this.createWatFerDevice(imgObj));
		
		return items;
			
	},
		
	createWatFerDevice: function(obj){
		return this.createImageSprite(obj);
	},
	
	createImageSprite: function(obj){
		return {
				type: obj.type,
				src: obj.src,
				x: obj.x,
				y: obj.y,
				width: obj.width,
				height: obj.height
		};
	},
	
	createTextSprite: function(obj){
		return {
				type: obj.type,
				text: obj.text,
				fontSize: obj.fontSize,
				fillStyle: obj.fillStyle,
				x: obj.x,
				y: obj.y,
				width: obj.width,
				height: obj.height
			};
	},
	
	isTabAlreadyCreate: function( items, id ){
		for( x in items){
			if(items[x].id == id)
				return {found: true, item: items[x]};
		}
		return {found: false};
	},
	
	createNewTab: function( me, tabPanel, _xtype, _title, leafId){
		var items = tabPanel.items.items;
		var tabId = 'maincenter_'+leafId;
		var result = me.isTabAlreadyCreate(items, tabId);
		if( result.found == false){
			tab = tabPanel.add({
				xtype: _xtype,
				title: _title,
				id: tabId,
				closable: true
			});
		}else{
			tab = result.item;
		}
		
		tabPanel.setActiveTab(tab);
	},	
});