Ext.define('Esprit.view.farmpark.FarmPark', {
	extend: 'Ext.panel.Panel',
	xtype: 'farmpark',
	
	requires: [
		'Esprit.view.farmpark.FarmParkViewModel',
		'Esprit.view.farmpark.FarmParkController'
	],	
	collapsible: false,
	split: true,
	minWidth: 250,
	
	controller: 'farmpark',
	viewModel:{
		type: 'farmpark',
	},
	
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
			
	scrollable: 'y',
	
	items: [{
		xtype: 'treelist',
		//reference: 'farmparktreelist',
		bind: '{navItems}',
		listeners: {
			itemclick: 'onItemClick'
		}
	}]	    
});