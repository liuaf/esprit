Ext.define('Esprit.view.statistics.Statistics', {
	extend: 'Ext.panel.Panel',
	xtype: 'widget.statistics',
	
			
	collapsible: false,
	split: true,
	minWidth: 320,
	
	/*
	controller: 'workorder',
	viewModel:{
		type: 'workorder',
	},
	*/
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
			
	scrollable: 'y',
	
	items: [{
		xtype: 'treelist',
		
		
	}]	    
});