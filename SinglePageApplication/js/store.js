UAM.Store = function () {
    UAM.EventEmitter.call(this);//wlasciwosci
    this.data = [];
    this.length = 0;
    this.activLength = 0;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (name) {
    this.data.push({
        name: name,
        active: false
    });
    this.length++;
    
    this.emit("add",name);
    this.emit("clearInput");
    this.emit("updateFooter",this.length,this.activLength);
};

UAM.Store.prototype.elementToggle = function (name) {
    this.data.forEach(function(element){
        if(element.name === name) {
            element.active ? this.activLength-- : this.activLength++;
            element.active = !element.active;   
        }
    }.bind(this));
    this.emit("elmentToogleView",name);
    this.emit("updateFooter",this.length,this.activLength);
};


