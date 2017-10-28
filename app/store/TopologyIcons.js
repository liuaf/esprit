Ext.define('Esprit.store.TopologyIcons', {
    extend: 'Ext.data.Store',
    alias: 'store.topologyicons',
	
	requires: [
		'Esprit.model.TopologyIcon'
	],
	
	//model: 'model.topologyicon',

    fields: ['name', 'thumb', 'url', 'type'],

    proxy: {
		type: 'ajax',
		url : '/app/view/topology/icons.json',
		reader: {
			type: 'json',
			rootProperty: 'data'
		}
	}
});