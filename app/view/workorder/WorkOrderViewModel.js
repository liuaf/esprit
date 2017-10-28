Ext.define('Esprit.view.workorder.WorkOrderViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.workorder',
	
	
	stores: {
        navItems: {
            type: 'tree',
            root: {
                expanded: true,
                children: [{
                    text: '我的工单',
                    iconCls: 'x-fa fa-file',
					id: 'myworkorder',
                    children: [{
                        text: '病虫害鉴定',
                        iconCls: 'x-fa fa-file-o',
					},{
                        text: '技师上门服务',
                        iconCls: 'x-fa fa-file-o',
					}]
                }/*,{
                    text: '山东烟台市农科院农业园区',
                    iconCls: 'x-fa fa-home',
					id: 'YantaiAoAS',
                    children: [{
                        text: '蔬菜大棚-01',
                        iconCls: 'x-fa fa-road',
                        children: [{
                            text: '视频监控',
                            iconCls: 'x-fa fa-video-camera',
							id: 'video-012',
                            leaf: true
                        },{
                            text: '环境监控',
                            iconCls: 'x-fa fa-line-chart',
							id: 'video-013',
                            leaf: true
                        },{
                            text: '设备自动化',
                            iconCls: 'x-fa fa-gears',
							id: 'video-014',
                            leaf: true
                        },{
                            text: '物流监控',
                            iconCls: 'x-fa fa-truck',
							id: 'video-015',
                            leaf: true
                        }]
                    },{
                        text: '水稻大棚-01',
                        iconCls: 'x-fa fa-road',
                        children: [{
                            text: '视频监控',
                            iconCls: 'x-fa fa-video-camera',
							id: 'video-016',
                            leaf: true
                        },{
                            text: '环境监控',
                            iconCls: 'x-fa fa-line-chart',
							id: 'video-017',
                            leaf: true
                        },{
                            text: '设备自动化',
                            iconCls: 'x-fa fa-gears',
							id: 'video-018',
                            leaf: true
                        },{
                            text: '物流监控',
                            iconCls: 'x-fa fa-truck',
							id: 'video-019',
                            leaf: true
                        }]
                    }]
                },{
                    text: '黑龙江大兴安岭农垦',
                    iconCls: 'x-fa fa-home',
					id: 'HeilongjiangNongken',
                    children: [{
                        text: '水稻大棚-01',
                        iconCls: 'x-fa fa-road',
                        children: [{
                            text: '视频监控',
                            iconCls: 'x-fa fa-video-camera',
							id: 'video-020',
                            leaf: true
                        },{
                            text: '环境监控',
                            iconCls: 'x-fa fa-line-chart',
							id: 'video-021',
                            leaf: true
                        },{
                            text: '设备自动化',
                            iconCls: 'x-fa fa-gears',
							id: 'video-022',
                            leaf: true
                        },{
                            text: '物流监控',
                            iconCls: 'x-fa fa-truck',
							id: 'video-023',
                            leaf: true
                        }]
                    }]
                }*/]
            }
        }
    }	
});