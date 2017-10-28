Ext.define('Esprit.view.Viewport', {
    extend: 'Ext.container.Viewport',
    
    requires: [
        'Ext.Img',
        'Ext.layout.container.Border',
        'Ext.layout.container.Accordion',
        'Ext.tab.Panel',
        'Ext.form.Panel'
    ],

    layout: 'border',

    initComponent: function() {
        var me = this,
            num = 1;

        me.items = [{
            xtype: 'container',
            region: 'north',
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
                html: 'Esprit科技',
                ariaAttributes: {
                    'aria-hidden': true
                },
				style:{
					'margin-top': '10px',
					'margin-left': '10px'
				},
				flex: 3,
            }, {
                xtype: 'component',
				html: '拓扑管理',
                flex: 3,
				style:{
					'margin-top': '10px',
					'margin-left': '10px'
				}
			},	{
                xtype: 'menu',
				text: '设备管理',
                flex: 3,
				style:{
					'margin-top': '10px',
					'margin-left': '10px'
				}
			},	{
                xtype: 'menu',
				text: '工单管理',
                flex: 3,
				style:{
					'margin-top': '10px',
					'margin-left': '10px'
				}
			},	{
                xtype: 'menu',
				items:[{
					text: 'Toggle left menu',
					handler: 'toggleLeft'
				}],
				
			},	{
                xtype: 'menu',
				text: '用户管理',
                flex: 3,
				style:{
					'margin-top': '10px',
					'margin-left': '10px'
				}
            },  {
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
            xtype: 'panel',
            region: 'west',
            
            title: 'Accordion panels',
            collapsible: true,
            split: true,
            minWidth: 320,
            
            layout: {
                type: 'accordion',
                animate: true
            },
            
            tools: [{
                type: 'pin',
                tooltip: 'Pin the panel'
            }, {
                type: 'help',
                tooltip: 'Get panel help'
            }],
            
            items: [{
                xtype: 'mysimplebuttons',
                closable: true
            }, {
                xtype: 'panel',
                title: 'Closable panel',
                closable: true,
                html: 'This is an example of a closable panel'
            }, {
                xtype: 'mysimpleform',
                title: 'Personal data form',
                closable: true
            }]
        }, {
            xtype: 'tabpanel',
            title: 'Center tab panel',
            region: 'center',
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
                xtype: 'mysimplegrid'
            }, {
                xtype: 'mysimplepanel'
            }, {
                xtype: 'mysimplelist'
            }, {
                xtype: 'container',
                title: 'Window',
                items: [{
                    xtype: 'button',
                    text: 'Open Window',
                    handler: function() {
                        var win = this.up('container').add(Ext.widget('mysimplewindow', {
                            title:'ARIA Window ' + num++
                        }));
                        
                        win.showBy(this, 'tr', [num*20, num*20]);
                    }
                }]
            }, {
                xtype: 'mysimpleitemselector'
//             }, {
//                 xtype: 'mysimpledatepicker'
            }, {
                xtype: 'mysimpletoolbar'
            }, {
                xtype: 'mysimplewizard'
            }, {
                xtype: 'container',
                title: 'Image',
                closable: true,
                
                items: [{
                    xtype: 'mysimpleimage'
                }]
            }]
        }];

        me.callParent();
    }
});
