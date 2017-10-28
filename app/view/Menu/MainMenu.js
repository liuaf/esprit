Ext.define('Esprit.view.menu.MainMenus', {
	extend: 'Ext.Panel',
	xtype: 'mainmenus',
	
	layout: {
		align: 'stretch',
		type: 'hbox'
	},
			
	items:[{
		xtype: 'image',
		alt: 'Sencha logo',
		src: 'resources/images/sencha-logo.png',
		width: 19,
		height: 28,
		style: {
			'margin-right': '10px'
		}
	}, {
		xtype: 'component',
		ariaRole: 'heading',
		html: 'Esprit科技',
		ariaAttributes: {
			'aria-hidden': true
		},
		style:{
			'margin-top': '10px',
			'margin-left': '10px'
		}
	},{
		xtype: 'menu',
		text: '首页'
	},{
		xtype: 'button',
        text: 'Floating Menu',
	},{
		text: '设备管理'
	},{
		text: '工单管理'
	},{
		text: '报表管理'
	},{
		text: '用户管理'
	}]
});