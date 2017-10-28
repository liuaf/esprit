Ext.application({
    name: 'Esprit',

    extend: 'Esprit.Application',

    requires: [
		//'Esprit.view.main.Main'
		'Esprit.view.home.HomePage'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    //mainView: 'Esprit.view.main.Main'
	//mainView: 'Esprit.view.main.Main'
	mainView: 'Esprit.view.home.HomePage'
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to Esprit.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
