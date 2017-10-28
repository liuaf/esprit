Ext.define('Esprit.view.device.WaterFertilizerMachine', {
	extend: 'Ext.draw.sprite.Composite',
	alias: 'sprite.waterfertilizermachine',
			
	constructor: function(config){
		this.sprites = [];
		this.callParent([conig]);
		this.createWaterAndFertilizerSystem(config);
	},
	
	createWaterAndFertilizerSystem: function(config){
		var me = this;
		
		this.add({
			type: 'image',
			src: 'resources/images/waterfertilizer/right-bucket-01.png',
			x: 200,
			y: 200,
			width: 100,
			height: 250
		});
		
		this.add({
			type: 'image',
			src: 'resources/images/waterfertilizer/right-bucket-02.png',
			x: 800,
			y: 200,
			width: 100,
			height: 250			
		});
	},
	
	addBucket: function(config){
		var me = this;
		me.add({
			type: 'rect',
			x: 200,
			y: 200,
			width: 40,
			height: 80,
			fillStyle: '#1F6D91'
		});
		
		me.add({
			type: 'rect',
			x: 210,
			y: 200,
			width: 20,
			height: 10,
			fillStyle: '#1F6D91'
		});
	},
	
	addDripTape: function(config){
	},
});

/*
Ext.define('Esprit.view.device.WaterFertilizerMachine', {
	extend: 'Ext.draw.Container',
	xtype: 'waterfertilizermachine',
	
	posAndShap:{
		posx: 0,
		posy: 0,
		width: 0,
		height: 0
	},
	
	sprites:[{
		type: 'rect',
		x: 50,
		y: 50,
		width: 100,
		height: 100,
		fillStyle: '#1F6D91'
	},{
		type: 'rect',
		x: 100,
		y: 100,
		width: 100,
		height: 100,
		fillStyle: '#1F6D91'
	}]
});
*/