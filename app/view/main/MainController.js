/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Esprit.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

	listen: {
        controller: {
            '*': {
                // We delegate all changes of router history to this controller by firing
                // the "changeroute" event from other controllers.
                changeroute: 'changeRoute',

                unmatchedroute: 'onUnmatchedRoute'
            }
        }
    },
	
	changeRoute: function (controller, route) {
		debugger;
        // Since we parse
        if (route.substring(0, 1) !== '!') {
            route = '!' + route;
        }

        this.redirectTo(route);
    },
	    onUnmatchedRoute: function(token) {
        if (token) {
            this.onBadRoute();
        }
    },
	
	onBadRoute: function () {
        //var app = ExecDashboard.app.getApplication();
        //this.changeRoute(this, app.getDefaultToken());
    },
	
    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
	
	onHomePageBtnClick: function( btn, e, eOpts){
		var me = this;
		
		var view = Ext.getCmp('mainwest');
		view.setCollapsed(true);
		
		var tabPanel = Ext.getCmp('main-center'),
			items = tabPanel.items.items,
			tabId = 'maincenter_homepage';
		var result = me.isTabAlreadyCreate(items, tabId);
		if( result.found == false){
			tab = tabPanel.add({
				xtype: 'homepage',
				title: '首页',
				id: tabId,
				owner: 'homepage',
				closable: true
			});
		}else{
			tab = result.item;
		}
		
		tabPanel.setActiveTab(tab);
	},
	
	onParkMgtBtnClick: function( btn, e, eOpts){
		var view = Ext.getCmp('mainwest');
		view.setCollapsed(false);
		view.setTitle('>> 园区管理');		
		view.setActiveItem('mainwest-farmpark');
	},
	
	onSmartAgricultureBtnClick: function( btn, e, eOpts){
		var view = Ext.getCmp('mainwest');
		view.setCollapsed(false);
		view.setTitle('>> 智慧农业');
		view.setActiveItem('mainwest-smartagriculture');
	},
	
	onWorkOrderBtnClick: function(newpanel){
		var view = Ext.getCmp('mainwest');
		view.setCollapsed(false);
		view.setTitle('>> 工单管理');
		view.setActiveItem('mainwest-workorder');
	},
	
	onStatBtnClick: function(newpanel){
		var view = Ext.getCmp('mainwest');
		view.setCollapsed(false);
		view.setTitle('>> 数据统计');
		view.setActiveItem('mainwest-statistics');
	},
	
	onUserBtnClick: function(newpanel){
		var view = Ext.getCmp('mainwest');
		view.setCollapsed(false);
		view.setTitle('>> 用户管理');
		view.setActiveItem('mainwest-user');
	},
	
	isTabAlreadyCreate: function( items, id ){
		for( x in items){
			if(items[x].id == id)
				return {found: true, item: items[x]};
		}
		return {found: false};
	},
});

