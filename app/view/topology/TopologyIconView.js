Ext.define('Esprit.view.topology.TopologyIconView', {
	extend: 'Ext.view.View',
	alias : 'widget.topologyiconview',
	
	requires: [
		'Esprit.store.TopologyIcons'
	],
	
    mixins: {
        dragSelector: 'Ext.ux.DataView.DragSelector',
        draggable   : 'Ext.ux.DataView.Draggable'
    },
	
	tpl: [
		'<tpl for=".">',
			'<div class="thumb-wrap">',
				'<div class="thumb">',
					'<img src="/app/view/topology/icons/{thumb}" height="50" width="50"/>',
					
				'</div>',
				'<span>{name}</span>',
			'</div>',
		'</tpl>'
	],
	itemSelector: 'div.thumb-wrap',
	
	initComponent: function() {
		var store = Ext.create('Esprit.store.TopologyIcons');
		
		store.load({scope: this, callback: function(records, operation, success) {
				if(success){
					debugger;
					
					var arr = new Array();
					for(r in records){
						arr.push(records[r].data);
					}					
					//me.lookupReference('createtopoloty').setData(arr);
					this.setData(arr);
				}
			}
		});
        
        debugger;
		
        this.mixins.dragSelector.init(this);
        this.mixins.draggable.init(this, {
            ddConfig: {
                ddGroup: 'organizerDD'
            },
            ghostTpl: [
                '<tpl for=".">',
                    '<img src="../view/chooser/icons/{thumb}" />',
                    '<tpl if="xindex % 4 == 0"><br /></tpl>',
                '</tpl>',
                '<div class="count">',
                    '{[values.length]} images selected',
                '<div>'
            ]
        });
        
        this.callParent();
    }

});