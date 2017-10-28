Ext.define('Esprit.view.env.EnvMonitor', {
	extend: 'Ext.panel.Panel',
	xtype: 'env',
   
    requires: [
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Area',
        'Ext.chart.series.Pie',
        'Ext.chart.interactions.PanZoom',
        'Ext.chart.interactions.Rotate',
		'Esprit.view.env.EnvMonitorController'
    ],

	cls: 'kpi-main',
	
    config: {
        activeState: null,
        defaultActiveState: 'soilMoisture'
    },

    controller: 'envmonitor',

    viewModel: {
        type: 'env'
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    scrollable: 'y',

    minWidth: 600,

    items: [{
        reference: 'mainChart',
        xtype: 'chart',
        flex: 1,
        interactions: [{
            type: 'panzoom',
            zoomOnPanGesture: false,
            axes: {
                left: {
                    maxZoom: 1
                }
            }
        }],
        cls: 'kpi-main-chart',
        bind: '{envMain}',
        minHeight: 290,
        animation: false,

        insetPadding: '40px 40px 20px 30px',

        tbar: {
            cls: 'kpi-toolbar',

            defaults: {
                toggleHandler: 'onToggleKpi'
            },

            items: [{
                xtype: 'container',
                cls: 'kpi-chart-title',
                html: '实时数据监控'
            },
            '->',
            {
                //ui: 'kpi',
                text: '土壤湿度',
                filter: 'soilMoisture',
                toggleGroup: 'kpi',
                reference: 'soilMoisture',
                allowDepress: false,
                dataIndex: 0
            },{
                //ui: 'kpi',
                text: '土壤温度',
                filter: 'soilTemp',
                reference: 'soilTemp',
                toggleGroup: 'kpi',
                allowDepress: false,
                dataIndex: 1
            },{
                //ui: 'kpi',
                text: '空气温度',
                filter: 'indoorHumidity',
                reference: 'indoorHumidity',
                toggleGroup: 'kpi',
                allowDepress: false,
                dataIndex: 2
            },{
                //ui: 'kpi',
                text: '空气湿度',
                filter: 'indoorTemp',
                reference: 'indoorTemp',
                margin: 0,
                toggleGroup: 'kpi',
                allowDepress: false,
                dataIndex: 1
            }]
        },

        axes: [{
            type: 'numeric',
            position: 'left',
            //fields: ['data2'],
            fontSize: 12,
            grid: true,
            minimum: 0,
			maximum: 100
        }, {
            type: 'category',
            position: 'bottom',
            //fields: ['name']
			fields: ['name']
        }],

        series: [/*{
			
            type: 'area',
			subStyle: {
                stroke: ['rgb(34,198,239)','rgb(241,73,91)','rgb(34,120,239)','rgb(241,10,91)'],
                fill: ['rgba(34,198,239,0.25)', 'rgba(241,73,91,0.25)','rgba(34,120,239,0.25)', 'rgba(241,10,91,0.25)'],
                'stroke-width': 3
            },
            xField: 'name',			
            yField: ['data1', 'data2', 'data3', 'data4']
			
        },*/{
			type: 'line',
			xField: 'name',
			yField: 'data1'
		},{
			type: 'line',
			xField: 'name',
			yField: 'data2'
		},{
			type: 'line',
			xField: 'name',
			yField: 'data3'
		},{
			type: 'line',
			xField: 'name',
			yField: 'data4'
		}]
    }],

    validStates: {
        soilMoisture: 1,
        soilTemp: 1,
        indoorHumidity: 1,
        indoorTemp: 1
    },
	
	
    isValidState: function (state) {
		debugger;
        return state in this.validStates;
    }

});
