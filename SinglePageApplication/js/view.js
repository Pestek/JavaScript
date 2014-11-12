UAM.InputView = function(view){
    UAM.EventEmitter.call(this);//wlasciwosci
    this.view = view;
    this.input = this.view.querySelector("input");
    this.btn = this.view.querySelector("button");
    console.log(this);
    this.btn.addEventListener("click",function(){
        
        this.emit("clickBtn",this.get());
        
        
    }.bind(this),false);
}

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);

UAM.InputView.prototype.clear = function(){
    this.view.value = "";   
}

UAM.InputView.prototype.get = function(){
    return this.input.value;  
}

UAM.ListView = function(view){
    this.view = view;
}

UAM.ListView.prototype.addNewListElement = function(name){
    var helper = document.createElement("li");
    helper.textContent = name;
    this.view.appendChild(helper);
}

UAM.FooterView = function(view){

    this.view = view;
    
}

UAM.FooterView.prototype.update = function(all, active){
    this.view.textContent = "ALL: " + all + ", ACTIVE: " + active;
}





