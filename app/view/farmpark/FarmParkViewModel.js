Ext.define('Esprit.view.farmpark.FarmParkViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.farmpark',
	
	
	stores: {
        navItems: {
            type: 'tree',
            root: {
                expanded: true,
                children: [{
                    text: '北京农科院农业园区',
                    iconCls: 'x-fa fa-home',
					type: 'farmpark',
					id: 'BeijingAoAS',
                    children: [{
                        text: '蔬菜大棚-01',
                        iconCls: 'x-fa fa-road',
						type: 'greenhouse',
                        children: [{
                            text: '视频监控',
                            iconCls: 'x-fa fa-video-camera',
							type: 'video',
							id: '0001',
                            leaf: true
                        },{
                            text: '环境监控',
                            iconCls: 'x-fa fa-line-chart',
							type: 'env',
							id: '0002',
                            leaf: true
                        },{
                            text: '设备自动化',
                            iconCls: 'x-fa fa-gears',
							type: 'auto',
							id: '0003',
                            leaf: true
                        },{
                            text: '物流监控',
                            iconCls: 'x-fa fa-truck',
							type: 'logistics',
							id: '0004',
                            leaf: true
                        }]
                    },{
                        text: '蔬菜大棚-02',
                        iconCls: 'x-fa fa-road',
						type: 'greenhouse',
						children: [{
                            text: '视频监控',
                            iconCls: 'x-fa fa-video-camera',
							type: 'video',
							id: '0005',
                            leaf: true
                        },{
                            text: '环境监控',
                            iconCls: 'x-fa fa-line-chart',
							type: 'env',
							id: '0006',
                            leaf: true
                        },{
                            text: '设备自动化',
                            iconCls: 'x-fa fa-gears',
							type: 'auto',
							id: '0007',
                            leaf: true
                        },{
                            text: '物流监控',
                            iconCls: 'x-fa fa-truck',
							type: 'logistics',
							id: '0008',
                            leaf: true
                        }]
                    },{
                        text: '水稻大棚-01',
                        iconCls: 'x-fa fa-road',
						type: 'greenhouse',
                        children: [{
                            text: '视频监控',
                            iconCls: 'x-fa fa-video-camera',
							type: 'video',
							id: '0009',
                            leaf: true
                        },{
                            text: '环境监控',
                            iconCls: 'x-fa fa-line-chart',
							type: 'env',
							id: '0010',
                            leaf: true
                        },{
                            text: '设备自动化',
                            iconCls: 'x-fa fa-gears',
							type: 'auto',
							id: '0011',
                            leaf: true
                        },{
                            text: '物流监控',
                            iconCls: 'x-fa fa-truck',
							type: 'logistics',
							id: '0012',
                            leaf: true
                        }]
                    }]
                },{
                    text: '山东烟台市农科院农业园区',
                    iconCls: 'x-fa fa-home',
					id: 'YantaiAoAS',
					type: 'farmpark',
                    children: [{
                        text: '蔬菜大棚-01',
                        iconCls: 'x-fa fa-road',
						type: 'greenhouse',
                        children: [{
                            text: '视频监控',
                            iconCls: 'x-fa fa-video-camera',
							type: 'video',
							id: '0013',
                            leaf: true
                        },{
                            text: '环境监控',
                            iconCls: 'x-fa fa-line-chart',
							type: 'env',
							id: '0014',
                            leaf: true
                        },{
                            text: '设备自动化',
                            iconCls: 'x-fa fa-gears',
							type: 'auto',
							id: '0015',
                            leaf: true
                        },{
                            text: '物流监控',
                            iconCls: 'x-fa fa-truck',
							type: 'logistics',
							id: '0016',
                            leaf: true
                        }]
                    },{
                        text: '水稻大棚-01',
                        iconCls: 'x-fa fa-road',
						type: 'greenhouse',
                        children: [{
                            text: '视频监控',
                            iconCls: 'x-fa fa-video-camera',
							type: 'video',
							id: '0017',
                            leaf: true
                        },{
                            text: '环境监控',
                            iconCls: 'x-fa fa-line-chart',
							type: 'env',
							id: '0018',
                            leaf: true
                        },{
                            text: '设备自动化',
                            iconCls: 'x-fa fa-gears',
							type: 'auto',
							id: '0019',
                            leaf: true
                        },{
                            text: '物流监控',
                            iconCls: 'x-fa fa-truck',
							type: 'logistics',
							id: '0020',
                            leaf: true
                        }]
                    }]
                },{
                    text: '黑龙江大兴安岭农垦',
                    iconCls: 'x-fa fa-home',
					id: 'HeilongjiangNongken',
					type: 'farmpark',
                    children: [{
                        text: '水稻大棚-01',
                        iconCls: 'x-fa fa-road',
						type: 'greenhouse',
                        children: [{
                            text: '视频监控',
                            iconCls: 'x-fa fa-video-camera',
							type: 'video',
							id: '0021',
                            leaf: true
                        },{
                            text: '环境监控',
                            iconCls: 'x-fa fa-line-chart',
							type: 'env',
							id: '0022',
                            leaf: true
                        },{
                            text: '设备自动化',
                            iconCls: 'x-fa fa-gears',
							type: 'auto',
							id: '0023',
							
                            leaf: true
                        },{
                            text: '物流监控',
                            iconCls: 'x-fa fa-truck',
							type: 'logistics',
							id: '0024',
                            leaf: true
                        }]
                    }]
                }]
            }
        }
    }	
});