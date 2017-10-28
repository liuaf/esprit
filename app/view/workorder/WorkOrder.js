Ext.define('Esprit.view.workorder.WorkOrder', {
	extend: 'Ext.panel.Panel',
	xtype: 'widget.westworkorder',
	
	requires: [
		'Esprit.view.workorder.WorkOrderViewModel',
		'Esprit.view.workorder.WorkOrderController'
	],
			
	collapsible: false,
	split: true,
	minWidth: 320,
	
	controller: 'workorder',
	viewModel:{
		type: 'workorder',
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