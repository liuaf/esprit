Ext.define('Esprit.view.env.EnvViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.env',

    requires: [
        'Esprit.model.Env',
        'Esprit.store.Env'
    ],

    data: {
    },

    stores: {
        envMain: {
            type: 'env',
			//model: 'evn',
            autoLoad: true,
            /*
			filters: {
                property: 'category',
                value: '{envCategory}'
            }*/
        }
    }
});
