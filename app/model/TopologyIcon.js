Ext.define('Esprit.model.TopologyIcon', {
    extend: 'Ext.data.Model',
	alias: 'model.topologyicon',
    idProperty: 'name',
    fields: ['name', 'thumb', {
        name: 'leaf', defaultValue: true
    }]
});