Ext.define('Esprit.view.auto.Automatic', {
	extend: 'Ext.panel.Panel',
	xtype: 'automatic',
	
	requires: [
		'Esprit.view.auto.AutoController',
		'Esprit.view.device.WaterFertilizerMachine'
	],	
	
	
	layout: 'border',
	
	controller: 'automatic',
	
	posx: 100,
	posy: 100,
	
	items: [{
			region: 'north',
			xtype: 'toolbar',
			items: [
			"->",
			{ 
				text: '创建',
				type: 'create',
				listeners: {
					click: 'onBtnCreateClick',
				}
			},{
				text: '保存',
				type: 'save',
				listeners: {
					click: 'onBtnSaveClick',
				}
			},{
				text: '清除',
				type: 'clean',
				listeners: {
					click: 'onBtnCleanClick',
				}
			}],
			
		},{
		region: 'center',
		
		bodyStyle: {
			background: '#fff',
			padding: '10px'
		},
		xtype: 'draw',
		sprites: [],
		plugins: ['spriteevents'],
		listeners: {
			spriteclick: 'spriteclick', 
			spritedbclick: 'spritedbclick'
		},

	},{
		region: 'east',
		xtype: 'panel',
		title: '设备属性',
		collapsible: true,
		collapsibled: true,
		split: true,
		hidden: true,
		minWidth:300
	}],

	listeners: {
		afterrender: 'afterrender',
		//beforerender: 'beforerender'
	}
});
