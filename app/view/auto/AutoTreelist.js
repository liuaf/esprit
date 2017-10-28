Ext.define('Esprit.view.auto.AutoTreelist', {
	extend: 'Ext.list.Tree',
	xtype: 'autotreelist',
	
	collapsible: true,
	split: true,
	minWidth: 320,
	
	controller: 'automatic',
	viewModel:{
		type: 'automatic',
	},
		
	scrollable: 'y',
	
	items: [{
		xtype: 'treelist',
		reference: 'automatictreelist',
		bind: '{navItems}',
		listeners: {
			itemclick: 'onItemClick'
		}
	}]	    
});