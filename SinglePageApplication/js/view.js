UAM.InputView = function (view) {
    UAM.EventEmitter.call(this); //properties
    this.view = view;
    this.input = this.view.querySelector("input");
    this.btn = this.view.querySelector("button");
    this.btn.addEventListener("click", function () {
        this.emit("clickBtn", this.get());
    }.bind(this), false);
}

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);

UAM.InputView.prototype.clear = function () {
    this.input.value = "";
}

UAM.InputView.prototype.get = function () {
    return this.input.value;
}

UAM.ListView = function (view) {
    UAM.EventEmitter.call(this); //properties
    this.view = view;
    this.list = view.querySelector("ul");
    this.listElements = this.list.querySelectorAll("li");
    //if some elements was added before run code in js
    // construction!
//    [].forEach.call(this.listElements, function (el) {
//        el.addEventListener("click", function () {
//            this.emit("elmentToogleStore", this.dataset.name);
//        }.bind(this));
//    });


}

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);

UAM.ListView.prototype.addNewListElement = function (name) {
    var helper = document.createElement("li"),
        that = this;
    helper.textContent = name;
    helper.dataset.name = name;
    helper.addEventListener("click", function () {
            that.emit("elmentToogleStore", this.dataset.name);
            });
    this.list.appendChild(helper);
}

UAM.ListView.prototype.toggleElement = function (name) {
    this.list.querySelector("li[data-name='" + name + "']").classList.toggle("activ");
}

UAM.FooterView = function (view) {
    this.view = view;
}

UAM.FooterView.prototype.update = function (all, active) {
    this.view.textContent = "ALL: " + all + ", ACTIVE: " + active;
}