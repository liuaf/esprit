Ext.define('Esprit.view.auto.AutomaticCreate', {
	extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.Card'
    ],
    xtype: 'autocreate-card',
    layout: 'card',
    width: 500,
    height: 400,

    bodyPadding: 15,

    defaults: {
        border:false
    },

	autoShow: true,
	
    defaultListenerScope: true,

    bbar: ['->',
        {
			itemId: 'card-prev',
            text: '&laquo; 上一步',
            handler: 'showPrevious',
            disabled: true
        },
        {
			itemId: 'card-next',
            text: '下一步 &raquo;',
            handler: 'showNext'
        }
    ],

    items: [
        {
            id: 'card-0',
            html: '<h2>创建水肥一体机</h2><p>Step 1 of 2</p><p>Please click the "Next" button to continue...</p>'
        },
        {
            id: 'card-1',
            html: '<h1>创建灌溉系统</h1><p>Step 2 of 2 - Complete</p>'
        }
    ],

    showNext: function () {
        this.doCardNavigation(1);
    },

    showPrevious: function (btn) {
        this.doCardNavigation(-1);
    },

    doCardNavigation: function (incr) {
        var me = this;
        var l = me.getLayout();
        var i = l.activeItem.id.split('card-')[1];
        var next = parseInt(i, 10) + incr;
        l.setActiveItem(next);

        me.down('#card-prev').setDisabled(next===0);
        me.down('#card-next').setDisabled(next===2);
    }

});