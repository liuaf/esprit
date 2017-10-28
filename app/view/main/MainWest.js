Ext.define('Esprit.view.main.MainWest', {
	extend: 'Ext.panel.Panel',
	xtype: 'widget.mainwest',
	
	requires: [
		'Esprit.view.workorder.WorkOrder',
		'Esprit.view.smartagriculture.SmartAgriculture',
		'Esprit.view.main.MainWestController'
		
    ],
	
	controller: 'mainwest',
	title: '>> 项目管理',
	
	layout: 'card',
	
	collapsible: true,
	split: true,
	minWidth: 250,
				
	items: [{
		xtype: 'farmpark',
		id: 'mainwest-farmpark'
	},{
		xtype: 'smartagriculture',
		id: 'mainwest-smartagriculture'
	},{
		xtype: 'westworkorder',
		id: 'mainwest-workorder'
	},{
		xtype: 'statistics',
		id: 'mainwest-statistics'
	},{
		xtype: 'user',
		id: 'mainwest-user'
	}],
});