Ext.define('Esprit.view.topology.TopologyIcons', {
	extend: 'Ext.panel.Panel',
	xtype: 'topologyiconspanel',
	
	requires: [
		'Esprit.view.topology.TopologyIconsViewModel',
		'Esprit.view.topology.TopologyIconView',
		'Esprit.store.TopologyIcons'
    ],
	
	controller: 'topologyicons',
	store: 'store.topologyicons',
	
		
	title: '>> 拓扑管理',
	
	collapsible: true,
	split: true,
	minWidth: 320,
	
	layout: {
		type: 'accordion',
		animate: true
	},
			
	scrollable: true,
	items: [{
		xtype: 'panel',
		title: '拓扑管理',
		minWidth: 320,
		
		closable: true,
		html: 'This is an example of a closable panel'
	},{
		xtype: 'panel',
		title: '新建拓扑',
		/*
		reference: 'createtopoloty',
				
		tpl: [
			'<tpl for=".">',
				'<div class="thumb-wrap">',
					'<div class="thumb">',
						'<img src="/app/view/topology/icons/{thumb}" height="50" width="50"/>',
						
					'</div>',
					'<span>{name}</span>',
				'</div>',
			'</tpl>'
		],
		itemSelector: 'div.thumb-wrap',
		*/
		minWidth: 320,
		closable: true,
		
		items:[{
			xtype: 'topologyiconview'
		}],
		
	}]	    
});