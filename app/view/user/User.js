Ext.define('Esprit.view.user.User', {
	extend: 'Ext.panel.Panel',
	xtype: 'widget.user',
	
			
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