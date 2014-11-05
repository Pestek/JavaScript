(function (global) {
    var EE;

    if (!global.UAM) {
        global.UAM = {};
    }

    EE = function () {
        //store the listeners somewhere
        this.listeners = {};
    };

    EE.prototype.on = function (eventName, listener, context) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = {
                tab: []
            };
        }
        this.listeners[eventName].tab.push({
            listener: listener,
            con: context
        });

        return function () {
            var helper = -1;
            for (var i=0; i < this.listeners[eventName].tab.length; ++i) {
                if (this.listeners[eventName].tab[i].listener === listener) {
                    helper = i;
                    break;
                }
            }
            if (helper != -1) {
                this.listeners[eventName].tab.splice(helper, 1);
            }
        }.bind(this);

    };

    EE.prototype.emit = function (eventName /*, other args...*/ ) {
        var helper = this.listeners[eventName].tab;
        var argumenty = [];
        for (var i = 1; i < arguments.length; ++i) {
            argumenty.push(arguments[i]);
        }
        for (var i=0; i<helper.length; ++i) {
            helper[i].listener.apply(helper[i].con, argumenty);
        }
    };

    var ee = new EE();

    var removeListener = ee.on('test', function (arg1, arg2) {
        console.log(arg1, arg2, this.key);
    }, {
        key: 'value'
    });
    var removeListener2 = ee.on('test2', function (arg1, arg2) {
        console.log(arg1, arg2, this.key);
    }, {
        key: 'value'
    });

    ee.emit('test', 1, 2); // 1, 2 value;
    removeListener(); //removes my listener from the event emitter;
    ee.emit('test'); //nothing will execute

    global.UAM.EventEmitter = EE;

}(window));
