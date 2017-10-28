Ext.define('Esprit.view.auto.AutoViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.automatic',	
	
	stores: {
        navItems: {
            type: 'tree',
            root: {
                expanded: true,
                children: [{
                    text: '水肥一体机',
                    iconCls: 'x-fa fa-home',
					type: 'farmpark',
					id: 'BeijingAoAS',
                    children: [{
                        text: '新创建',
                        iconCls: 'x-fa fa-road',
						type: 'autocreate',
						id: 'auto-001',
						leaf: true
					},{
                        text: '已创建',
                        iconCls: 'x-fa fa-road',
						type: 'autocreated',
						children: [{
                            text: '蔬菜大棚-01',
                            iconCls: 'x-fa fa-video-camera',
							type: 'greehouse',
							id: '0005',
                            leaf: true
                        },{
                            text: '蔬菜大棚-01',
                            iconCls: 'x-fa fa-line-chart',
							type: 'greehouse',
							id: '0006',
                            leaf: true
                        }]
                    }]
                }]
            }
        }
    }	
});