function MainContain(){
	this.contain = {
		//example
		'Map' : null,
		'Panel' : null
	};
	
	this.parent = null;
	
	this.has = function(name){
		return this.contain[name]!=null ? true : false;
	};
	
	
	this.add = function(name,object){
		this.contain[name] = object;
		this.parent.add(object);
	};
	
	this.active = function(name){
		this.parent.setActiveItem(this.contain[name]);
	};
	
	this.del = function(name){
		this.contain[name] = null;
	};
	
	
}

var mContain = new MainContain();