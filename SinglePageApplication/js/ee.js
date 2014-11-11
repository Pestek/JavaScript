    var UAM = UAM || {};

    UAM.EventEmitter = function () {
        //store the listeners somewhere
        this.listeners = {};
    };

    UAM.EventEmitter.prototype.on = function (eventName, listener, context) {
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

    UAM.EventEmitter.prototype.emit = function (eventName /*, other args...*/ ) {
        var helper = this.listeners[eventName].tab;
        var argumenty = [];
        for (var i = 1; i < arguments.length; ++i) {
            argumenty.push(arguments[i]);
        }
        for (var i=0; i<helper.length; ++i) {
            helper[i].listener.apply(helper[i].con, argumenty);
        }
    };
