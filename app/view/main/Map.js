Ext.define('Esprit.view.main.Map',{
	xtype: 'esprit-map',
			
	constructor: function( configParam){
			
		var configBase={
			bmapType: 'map',
			border: false,
			zoomLevel: 5,
			centerCity: '西安市',
			mapConfigs: ['enablesScrollWheelZoom'],
			mapControls: [{
				controlName: 'ScaleControl',
				anchor: 'BMAP_ANCHOR_TOP_LEFT',
			},{
				controlName: 'NavigationControl',
				anchor: 'BMAP_ANCHOR_TOP_RIGHT',
				type: 'BMAP_NAVIGATION_CONTROL_SMALL',
				isOpen: 1
			}],
			
			
			markers: [{
				x: 116.2936610000,
				y: 39.9493470000,
				icon: 'resources/images/fireplug.png',
				width: 25,
				height: 25,
				id: 'FP000001',
				type: 'FP',
				name: '北京农科院农业园区'
				//isDragging: true
			},{
				x: 121.2859520000,
				y: 37.4955660000,
				icon: 'resources/images/fireplug.png',
				width: 25,
				height: 25,
				id:'FP000002',
				type: 'FP',
				name: '山东烟台农科院农业园区'
				//isDragging: true
			},{
				x: 124.8121130000,
				y: 49.7945070000,
				icon: 'resources/images/fireplug.png',
				width: 25,
				height: 25,
				id: 'FP000003',
				type: 'FP',
				name:'黑龙江大兴安岭农垦',
				//isDragging: true
			}]
		};
		
		Ext.applyIf(configBase, configParam);
		
		return Ext.create( 'Esprit.view.bmap.BMapPanel', configBase);
	}
});