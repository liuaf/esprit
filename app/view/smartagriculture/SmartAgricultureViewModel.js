Ext.define('Esprit.view.smartagriculture.SmartAgricultureViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.smartagriculture',	
	
	stores: {
        navItems: {
            type: 'tree',
            root: {
                expanded: true,
                children: [{
                    text: '水肥一体机',
                    iconCls: 'x-fa fa-cogs',
					type: 'farmpark',
					id: 'WaterFertilizer',
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
                            text: ' 蔬菜大棚-01',
                            iconCls: 'x-fa fa-ils',
							type: 'waterfermachine',
							id: 'auto-005',
                            leaf: true
                        },{ 
                            text: ' 蔬菜大棚-01',
                            iconCls: 'x-fa fa-ils',
							type: 'waterfermachine',
							id: 'auto-006',
                            leaf: true
                        }]
                    }]
                },{
					text: '无人机植保',
					iconCls: 'x-fa fa-plane',
					type: 'farmpark',
					id: 'UavPlanProtection',
					children: [{
						text: '新创建',
						iconCls: 'x-fa fa-road',
						type: 'uavppcreate',
						id: 'uavpp-001',
						leaf: true
					},{
						text: '已植保',
						iconCls: 'x-fa fa-road',
						type: 'uavppcreated',
						children: [{
							text: ' 麦田-01',
							iconCls: 'x-fa fa-ils',
							type: 'cornfield',
							id: 'uavpp-005',
							leaf: true
						},{ 
							text: ' 蔬菜大棚-01',
							iconCls: 'x-fa fa-ils',
							type: 'cornfield',
							id: 'uavpp-006',
							leaf: true
						}]
					}]
				}]
            }
        }
    }	
});