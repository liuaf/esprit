Ext.define('Esprit.view.farmpark.FarmParkTreelist', {
	extend: 'Ext.list.Tree',
	xtype: 'farmparktreelist',
	
	collapsible: true,
	split: true,
	minWidth: 320,
	
	controller: 'farmpark',
	viewModel:{
		type: 'farmpark',
	},
		
	scrollable: 'y',
	
	items: [{
		xtype: 'treelist',
		reference: 'farmparktreelist',
		bind: '{navItems}',
		listeners: {
			itemclick: 'onItemClick'
		}
	}]	    
});