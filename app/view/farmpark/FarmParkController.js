Ext.define('Esprit.view.farmpark.FarmParkController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.farmpark',
	
	requires: [
		'Esprit.view.video.VideoPlayer'
	],
	
	onItemClick: function( sender, info, eOpts ){
		Ext.log("onItemClick");

		var me = this,
			tabPanel = Ext.getCmp('main-center'),
			tab;
					
		var item = info.item;
		var node = item.getNode();
		var leafId = node.data.id;
		
		switch(node.data.type)
		{
			case 'farmpark':
				
				break;
				
			case 'greenhouse':
				Ext.log('type=greenhouse');
				break;
			
			case 'video':	
				me.createNewTab( me, tabPanel, 'videoplayer', '视频监控', leafId);

				break;
			
			case 'env':				
				me.createNewTab( me, tabPanel, 'env', '环境监控', leafId);
				
				break;
			
			case 'auto':
				me.createNewTab( me, tabPanel, 'automatic', '设备自动化', leafId);
				Ext.log('type=auto');
				break;
			
			case 'user':
				Ext.log('type=user');
			
				break;
		}	
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
				owner: 'farmpark',
				closable: true
			});
		}else{
			tab = result.item;
		}
		
		tabPanel.setActiveTab(tab);
	},	
});