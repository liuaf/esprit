Ext.define('Esprit.view.main.Main', {
    extend: 'Ext.container.Viewport',
    
    requires: [
        'Ext.Img',
        'Ext.layout.container.Border',
        'Ext.layout.container.Accordion',
        'Ext.tab.Panel',
        'Ext.form.Panel',
		'Esprit.view.topology.TopologyIcons',
		'Esprit.view.bmap.BMapPanel',
		'Esprit.view.main.MainController',
		'Esprit.view.user.User',
		'Esprit.view.statistics.Statistics',
		'Esprit.view.main.MainWest',
		'Esprit.view.farmpark.FarmPark'
    ],

    layout: 'border',
	
	controller: 'main',
	
	initComponent: function() {
        var me = this,
            num = 1;

        me.items = [{
            xtype: 'container',
            region: 'north',
			itemId: 'north',
            padding: '6 12',
            height: 50,
            
            ariaRole: 'banner',
            
            layout: {
                align: 'stretch',
                type: 'hbox'
            },
            
            items: [{
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
                //html: 'Esprit科技',
				html: '东西无限(北京)',
                ariaAttributes: {
                    'aria-hidden': true
                },
				style:{
					'margin-top': '10px',
					'margin-left': '10px'
				},
				flex: 3,
            },{
                xtype: 'button',
				text: '首页',
                flex: 3,
				style:{
					'margin': '5 10 0 0',
				},
				listeners:{  
					click:'onHomePageBtnClick'
				}  
			},{
                xtype: 'button',
				text: '园区管理',
                flex: 3,
				style:{
					'margin': '5 10 0 0',
				},
				listeners:{  
					click:'onParkMgtBtnClick'
				}  
			},{
                xtype: 'button',
				html: '智慧农业',
                flex: 3,
				style:{
					'margin': '5 10 0 0',
				},
				listeners:{  
				   click: 'onSmartAgricultureBtnClick'
				}  
			},	{
                xtype: 'button',
				text: '工单管理',
                flex: 3,
				style:{
					'margin': '5 10 0 0',
				},
				listeners:{  
				   click: 'onWorkOrderBtnClick'
				} 
			},	{
                xtype: 'button',
				text: '数据统计',
				flex: 3,
				style:{
					'margin': '5 10 0 0',
				},
				listeners:{  
				   "click": 'onStatBtnClick'
				} 
				
			},	{
                xtype: 'button',
				text: '用户管理',
                flex: 3,
				style:{
					'margin': '5 10 0 0',
				},
				listeners:{  
					"click": 'onUserBtnClick'
				} 
            },  {
				flex: 1
			},	{
                xtype: 'image',
                alt: 'User logo',
                src: 'resources/images/user.png',
                width: 28,
                height: 28,
                style: {
                    'margin-right': '10px'
                }
            }]
        }, {			
			xtype: 'mainwest',
            region: 'west',
			id: 'mainwest',
			margin: '3 3 0 3',
        }, {
            xtype: 'tabpanel',
			reference: 'main-center',
			id: 'main-center',
            //title: 'Center tab panel',
            region: 'center',
			itemId: 'center',
            ariaRole: 'main',
            header: false,
            split: true,
            layout: 'fit',
            bodyStyle: 'background:white',
            defaults: {
                padding: 12,
                bodyStyle: 'background:white'
            },
            items: [{ 
				xtype: 'esprit-map',
				title: '地图',
				id: 'center-map',
				margin: '3 3 0 3',
				el:'container_baidu'
			}]
        }];

        me.callParent();
    }
});
