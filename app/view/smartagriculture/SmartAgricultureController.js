Ext.define('Esprit.view.smartagriculture.SmartAgricultureController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.smartagriculture',
	
	requires: [
		'Esprit.view.auto.Automatic'
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
			case 'autocreate':
				me.createNewTab( me, tabPanel, 'automatic', '新创建', leafId);
				Ext.log('type=autocreate');
				break;
				
			case 'autocreated':
				Ext.log('type=autocreated');
				break;
			
			case 'waterfermachine':	
				Ext.log('type=waterfermachine');

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
				closable: true
			});
		}else{
			tab = result.item;
		}
		
		tabPanel.setActiveTab(tab);
	},	
});