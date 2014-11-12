UAM.Store = function () {
    UAM.EventEmitter.call(this);//wlasciwosci
    this.data = [];
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (data) {
    this.data.push({
        data: data,
        active: false
    });
    this.emit("add",data);
};

UAM.Store.prototype.update = function (id, data) {
// for what? what does it have to do?
    this.data[id].data  = data;
};