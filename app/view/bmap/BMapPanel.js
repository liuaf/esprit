Ext.define('Esprit.view.bmap.BMapPanel', {
	extend: 'Ext.panel.Panel',
	xtype: 'bmappanel',
	
	layout: 'fit',
	
	initComponent: function(){

		Ext.applyIf(this.bmap, this.config);
	
		this.callParent();
	},
	
	afterRender: function(){			
		var wh = this.ownerCt.getSize();
		Ext.applyIf(this. wh);
		this.callParent();

		if(this.bmapType === 'map'){
			this.bmap = new BMap.Map(this.body.dom, {enableMapClick: false, mapType:BMAP_HYBRID_MAP});
			this.bmap.centerAndZoom(this.centerCity, this.zoomLevel);
			this.bmap.enableScrollWheelZoom(true);
			var ctrlNav = new window.BMap.NavigationControl({
                        anchor: BMAP_ANCHOR_TOP_LEFT,
                        type: BMAP_NAVIGATION_CONTROL_LARGE
                    });
            this.bmap.addControl(ctrlNav);
		}	
		this.onMapReady();		
	},
	
	onMapReady: function(){
		this.addMapConfigs();
		this.addMapControls();
		this.addMapMarkers(this.markers);
	},
	
	getMap: function(){
		return this.bmap;
	},
	
	addMapMarkers: function(markerArray){
		if(Ext.isArray(markerArray)){
			for(var i=0; i<markerArray.length; ++i){
				this.addMapMarker(markerArray[i]);
			}
		}
	},
	
	addMapMarker: function(markerParam){
		
		
		var me = this;
		
		var firecock = new BMap.Icon(markerParam.icon, new BMap.Size(markerParam.width, markerParam.height)); 					
		//var firecock = new BMap.Icon();
		var point = new BMap.Point(markerParam.x, markerParam.y);
		var markerBase = new BMap.Marker(point);
		//markerBase.setIcon(firecock);
		
		if( markerParam.isDragging == true){
			markerBase.enableDragging();
		}else{
			markerBase.disableDragging();
		}
		
		var txt = '';
		
		txt += ("名称:" + markerParam.name + '<br/>');
		txt += ("经度:" + markerParam.x + '<br/>');
		txt += ("纬度:" + markerParam.y + '<br/>');
		
		var infoWin = new BMap.InfoWindow(txt);
		markerBase.addEventListener("mouseover", function(){this.openInfoWindow(infoWin);});
		//markerBase.addEventListener("click", function(){me.onClickMarker(markerParam.id, markerParam.type);});
		
		this.getMap().addOverlay(markerBase);
	},
	
	addMapControls: function(){
				
		if( Ext.isArray(this.mapControls)){
			for(var i=0; i<this.mapControls.lenght; ++i){
				this.addMapControl(this.mapcontrols[i]);
			}
		}
	},
	
	addMapControl: function(controlParam){
				
		var controlBase = new BMap[controlParam.controlName](controlParam);
		this.getMap().addControl(controlBase);
		
	},
	
	addMapConfigs: function(){
		
		if(Ext.isArray(this.mapConfigs)){
			for(var i=0; i<this.mapConfigs.length; ++i){
				this.addMapConfig(this.mapConfigs[i]);
			}
		}else if( typeof this.mapConfigs === 'string'){
			this.addMapConfig(this.mapConfigs);
		}
	},
	
	addMapConfig: function(configParam){
		
		this.getMap()[configParam];
	},
	
	onClickMarker: function(id,type){		
		var maincenter = Ext.getCmp('main');
		var markertab = Ext.getCmp("marker_"+id);
		if( markertab == undefined){
			var tp = new Ext.Panel({
				id: "marker_"+id,
				title: (type=="FP"?"消防栓-"+id:"消防车-警"+id)
			});
			maincenter.add(tp);
			maincenter.setActiveTab(tp);
		}else{
			maincenter.setActiveTab(markertab);
		}
	},
	
	items: [{
		id: 'BaiduMap',
		autoScroll: false,
		html: "<div style='width:100%;height:100%;' id='container_baidu'></div>"
    }]
});