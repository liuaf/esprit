Ext.define('Esprit.view.smartagriculture.SmartAgriculture', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.smartagriculture',
	
	
	requires: [
		'Esprit.view.smartagriculture.SmartAgricultureController'
	],
	
	collapsible: false,
	split: true,
	minWidth: 250,
	
	
	controller: 'smartagriculture',
	viewModel:{
		type: 'smartagriculture',
	},
	
	
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
			
	scrollable: 'y',
		
	items: [{
		xtype: 'treelist',
		bind: '{navItems}',
		listeners: {
			itemclick: 'onItemClick'
		}
		
	}]	    
});