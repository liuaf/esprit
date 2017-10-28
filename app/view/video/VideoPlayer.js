Ext.define('Esprit.view.video.VideoPlayer', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.videoplayer',

	fullscreen: false,
    layout: 'fit',
	items: [{
		xtype: 'video',
		src: '/resources/video/greenhouse.mp4',
		type: 'video/mp4',
		autoPause: true,
		autoResume: true,
		enableControls: false,
		preload: true,
		posterUrl: './resources/video/greenhouse.png',
	}]	
});