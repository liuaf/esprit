
function BaseRemoteDataManager(){
	
	
	this.firstData = null;
	
	this.firstRequest = function(callback){
		
		var data = JSON.stringify({
		"client_id": "iot-poc-cn-api/anfengliu@thingparkcn.com",
		"client_secret": "Q1w2e3r4"
		});
		var that = this;
		var xhr = new XMLHttpRequest();
		xhr.addEventListener("readystatechange", function () {
			if (this.readyState === 4) {
				console.log(this.responseText);
				that.firstData = JSON.parse(this.responseText);
				callback(that.firstData,this.responseText);
			}
		});
		xhr.open("POST", "/toddle/v1/oauth/token");
		xhr.setRequestHeader("content-type", "application/json");
		xhr.send(data);
	};
	
	this.secondData = null;
	
	this.secondRequest = function(callback){
		
		var that = this;
		var xhr = new XMLHttpRequest();
		xhr.addEventListener("readystatechange", function () {
			if (this.readyState === 4) {
				console.log(this.responseText);
				that.secondData = JSON.parse(this.responseText);
				that.getXY();
				callback(that.secondData,this.responseText);
			}
		});
		xhr.open("GET", "/toddle/v1/basestations");
		xhr.setRequestHeader("content-type", "application/json");
		xhr.setRequestHeader("accept", "application/json");
		xhr.setRequestHeader("authorization", this.firstData.token_type + " " + this.firstData.access_token);
		xhr.send();
	};
	
	this.XY = [];
	this.XYcoords = [];
	this['北京'] = [116.40739499999995, 39.904211];
	
	this.getXY = function(){
		var arr = this.secondData.basestations;
		for (var i=0;i<arr.length;i++){
			var tempXY = [arr[i].stats.lastGeoLongitude,arr[i].stats.lastGeoLatitude,arr[i]];
			var tempXYcoords = [tempXY,this['北京']];
			if(tempXY[0]!=0 && tempXY[1]!=0){
				this.XY.push(tempXY);
				this.XYcoords.push(tempXYcoords);
			}
			
		}
		console.log('XY');
		console.log(this.XY);
	};
	
	
};



var RemoteDataManager =new BaseRemoteDataManager();


if(true){ //切换为本地模式,false为远程
	RemoteDataManager.firstRequest = function(callback){
		callback();
	};
	RemoteDataManager.secondRequest = function(callback){
		var responseText = '{  "basestations" : [ {    "id" : "004A098E",    "baseStationProfileId" : "MT/MTAC.2",    "name" : "Gab-Tech",    "administrationState" : "ACTIVE",    "stats" : {      "gpsSyncStatus" : "LOCKING_OR_NO_SIGNAL",      "lastGeoLatitude" : 0.0,      "lastGeoLongitude" : 0.0,      "lastGeoAltitude" : 0,      "fileSystemUsag" : 0.0,      "alarmStats" : {        "nonAckedClearedCount" : 36,        "nonAckedUnclearedCount" : 0,        "nonAckedWarningCount" : 0,        "nonAckedMinorCount" : 0,        "nonAckedMajorCount" : 1,        "nonAckedCriticalCount" : 1      },      "rx2Activated" : false    },    "smn" : "0000-xx-0000-0000"  }, {    "id" : "C0000293",    "baseStationProfileId" : "FOXC/FOXCWLAN.1",    "name" : "foxconn868",    "administrationState" : "ACTIVE",    "stats" : {      "gpsSyncStatus" : "LOCKING_OR_NO_SIGNAL",      "lastGeoLatitude" : 25.0806,      "lastGeoLongitude" : 121.564,      "lastGeoAltitude" : 20,      "fileSystemUsag" : 0.0,      "alarmStats" : {        "nonAckedClearedCount" : 3,        "nonAckedUnclearedCount" : 0,        "nonAckedWarningCount" : 0,        "nonAckedMinorCount" : 0,        "nonAckedMajorCount" : 0,        "nonAckedCriticalCount" : 1      },      "rx2Activated" : false    },    "smn" : "0000-GG-0000-0293"  }, {    "id" : "C0000197",    "baseStationProfileId" : "FOXC/FOXCWLAN.1",    "name" : "foxconn868",    "administrationState" : "ACTIVE",    "stats" : {      "gpsSyncStatus" : "LOCKING_OR_NO_SIGNAL",      "lastGeoLatitude" : 25.0806,      "lastGeoLongitude" : 121.564,      "lastGeoAltitude" : 20,      "fileSystemUsag" : 0.0,      "alarmStats" : {        "nonAckedClearedCount" : 16,        "nonAckedUnclearedCount" : 0,        "nonAckedWarningCount" : 0,        "nonAckedMinorCount" : 0,        "nonAckedMajorCount" : 0,        "nonAckedCriticalCount" : 1      },      "rx2Activated" : false    },    "smn" : "0000-GG-0000-0197"  }, {    "id" : "00000174",    "baseStationProfileId" : "FOXC/FOXCWLAN.1",    "name" : "BEILIN_？_470_1234",    "administrationState" : "ACTIVE",    "stats" : {      "gpsSyncStatus" : "LOCKING_OR_NO_SIGNAL",      "lastGeoLatitude" : 0.0,      "lastGeoLongitude" : 0.0,      "lastGeoAltitude" : 45,      "fileSystemUsag" : 0.0,      "alarmStats" : {        "nonAckedClearedCount" : 81,        "nonAckedUnclearedCount" : 0,        "nonAckedWarningCount" : 0,        "nonAckedMinorCount" : 0,        "nonAckedMajorCount" : 0,        "nonAckedCriticalCount" : 0      },      "rx2Activated" : false    },    "smn" : "AAAA-CC-DDDD-0174"  }, {    "id" : "0B030686",    "baseStationProfileId" : "KER/KE920.1",    "name" : "Actility Lab Kerlink - Vedran Kedmenec",    "administrationState" : "ACTIVE",    "stats" : {      "gpsSyncStatus" : "LOCKING_OR_NO_SIGNAL",      "lastGeoLatitude" : 0.0,      "lastGeoLongitude" : 0.0,      "lastGeoAltitude" : 0,      "fileSystemUsag" : 0.0,      "alarmStats" : {        "nonAckedClearedCount" : 2,        "nonAckedUnclearedCount" : 1,        "nonAckedWarningCount" : 0,        "nonAckedMinorCount" : 0,        "nonAckedMajorCount" : 0,        "nonAckedCriticalCount" : 0      },      "rx2Activated" : false    },    "smn" : "0000-xx-0000-0000"  }, {    "id" : "0806009E",    "baseStationProfileId" : "KER/KE920.1",    "name" : "LRR_OFFICE",    "administrationState" : "ACTIVE",    "stats" : {      "gpsSyncStatus" : "LOCKING_OR_NO_SIGNAL",      "lastGeoLatitude" : 1.281821,      "lastGeoLongitude" : 103.85038,      "lastGeoAltitude" : 105,      "fileSystemUsag" : 0.0,      "alarmStats" : {        "nonAckedClearedCount" : 33,        "nonAckedUnclearedCount" : 0,        "nonAckedWarningCount" : 1,        "nonAckedMinorCount" : 0,        "nonAckedMajorCount" : 0,        "nonAckedCriticalCount" : 0      },      "rx2Activated" : false    },    "smn" : "0000-XX-0000-0000"  }, {    "id" : "080E0150",    "baseStationProfileId" : "KER/KE920.1",    "name" : "Gab-Kerlink",    "administrationState" : "ACTIVE",    "stats" : {      "gpsSyncStatus" : "LOCKING_OR_NO_SIGNAL",      "lastGeoLatitude" : 1.281661,      "lastGeoLongitude" : 103.851456,      "lastGeoAltitude" : 0,      "fileSystemUsag" : 0.0,      "alarmStats" : {        "nonAckedClearedCount" : 102,        "nonAckedUnclearedCount" : 0,        "nonAckedWarningCount" : 0,        "nonAckedMinorCount" : 0,        "nonAckedMajorCount" : 0,        "nonAckedCriticalCount" : 1      },      "rx2Activated" : false    },    "smn" : "0000-XX-0000-0000"  }, {    "id" : "0000012B",    "baseStationProfileId" : "FOXC/FOXCWLAN.1",    "name" : "FXN_470_12B",    "administrationState" : "ACTIVE",    "stats" : {      "gpsSyncStatus" : "LOCKING_OR_NO_SIGNAL",      "lastGeoLatitude" : 0.0,      "lastGeoLongitude" : 0.0,      "lastGeoAltitude" : 0,      "fileSystemUsag" : 0.0,      "alarmStats" : {        "nonAckedClearedCount" : 13,        "nonAckedUnclearedCount" : 0,        "nonAckedWarningCount" : 0,        "nonAckedMinorCount" : 0,        "nonAckedMajorCount" : 0,        "nonAckedCriticalCount" : 1      },      "rx2Activated" : false    },    "smn" : "1111-BB-CCCC-012B"  }, {    "id" : "00000279",    "baseStationProfileId" : "FOXC/FOXCWLAN.1",    "name" : "POOSA_TEST",    "administrationState" : "ACTIVE",    "stats" : {      "gpsSyncStatus" : "LOCKING_OR_NO_SIGNAL",      "lastGeoLatitude" : 0.0,      "lastGeoLongitude" : 0.0,      "lastGeoAltitude" : 0,      "fileSystemUsag" : 0.0,      "alarmStats" : {        "nonAckedClearedCount" : 3,        "nonAckedUnclearedCount" : 0,        "nonAckedWarningCount" : 0,        "nonAckedMinorCount" : 0,        "nonAckedMajorCount" : 0,        "nonAckedCriticalCount" : 1      },      "rx2Activated" : false    },    "smn" : "0000-GG-0000-0279"  }, {    "id" : "080E004A",    "baseStationProfileId" : "KER/KE920.1",    "name" : "Kerlink Desktop mvalo",    "administrationState" : "ACTIVE",    "stats" : {      "gpsSyncStatus" : "LOCKING_OR_NO_SIGNAL",      "lastGeoLatitude" : 48.8797,      "lastGeoLongitude" : 2.332198,      "lastGeoAltitude" : 103,      "fileSystemUsag" : 0.0,      "alarmStats" : {        "nonAckedClearedCount" : 26,        "nonAckedUnclearedCount" : 0,        "nonAckedWarningCount" : 0,        "nonAckedMinorCount" : 0,        "nonAckedMajorCount" : 0,        "nonAckedCriticalCount" : 0      },      "rx2Activated" : false    },    "smn" : "0000-XX-0000-0000"  }, {    "id" : "00000402",    "baseStationProfileId" : "FOXC/FOXCWLAN.1",    "name" : "Foxconn desktop mvalo 470",    "administrationState" : "ACTIVE",    "stats" : {      "gpsSyncStatus" : "LOCKING_OR_NO_SIGNAL",      "lastGeoLatitude" : 25.0806,      "lastGeoLongitude" : 121.564,      "lastGeoAltitude" : 20,      "fileSystemUsag" : 0.0,      "alarmStats" : {        "nonAckedClearedCount" : 51,        "nonAckedUnclearedCount" : 0,        "nonAckedWarningCount" : 1,        "nonAckedMinorCount" : 0,        "nonAckedMajorCount" : 0,        "nonAckedCriticalCount" : 0      },      "rx2Activated" : false    },    "smn" : "0000-XX-0000-0000"  }, {    "id" : "00000460",    "baseStationProfileId" : "FOXC/FOXCWLAN.1",    "name" : "FOXCONN_GW_433_460",    "administrationState" : "ACTIVE",    "stats" : {      "gpsSyncStatus" : "LOCKING_OR_NO_SIGNAL",      "lastGeoLatitude" : 31.00998,      "lastGeoLongitude" : 121.276695,      "lastGeoAltitude" : 20,      "fileSystemUsag" : 0.0,      "alarmStats" : {        "nonAckedClearedCount" : 6,        "nonAckedUnclearedCount" : 0,        "nonAckedWarningCount" : 0,        "nonAckedMinorCount" : 0,        "nonAckedMajorCount" : 0,        "nonAckedCriticalCount" : 0      },      "rx2Activated" : false    },    "smn" : "1111-BB-CCCC-0460"  }, {    "id" : "0806009F",    "baseStationProfileId" : "KER/KE920.1",    "name" : "0806009F",    "administrationState" : "ACTIVE",    "stats" : {      "gpsSyncStatus" : "LOCKING_OR_NO_SIGNAL",      "lastGeoLatitude" : 0.0,      "lastGeoLongitude" : 0.0,      "lastGeoAltitude" : 0,      "fileSystemUsag" : 0.0,      "alarmStats" : {        "nonAckedClearedCount" : 2,        "nonAckedUnclearedCount" : 0,        "nonAckedWarningCount" : 1,        "nonAckedMinorCount" : 0,        "nonAckedMajorCount" : 0,        "nonAckedCriticalCount" : 1      },      "rx2Activated" : false    },    "smn" : "0000-XX-0000-0000"  }, {    "id" : "C00001F8",    "baseStationProfileId" : "FOXC/FOXCWLAN.1",    "name" : "FXN_868_C00001F8",    "administrationState" : "ACTIVE",    "stats" : {      "gpsSyncStatus" : "LOCKING_OR_NO_SIGNAL",      "lastGeoLatitude" : 25.0806,      "lastGeoLongitude" : 121.564,      "lastGeoAltitude" : 20,      "fileSystemUsag" : 0.0,      "alarmStats" : {        "nonAckedClearedCount" : 3,        "nonAckedUnclearedCount" : 0,        "nonAckedWarningCount" : 0,        "nonAckedMinorCount" : 0,        "nonAckedMajorCount" : 0,        "nonAckedCriticalCount" : 0      },      "rx2Activated" : false    },    "smn" : "0000-bb-0000-0000"  } ]}';
		RemoteDataManager.secondData = JSON.parse(responseText);
		RemoteDataManager.getXY();
		callback();
	};
	

}





