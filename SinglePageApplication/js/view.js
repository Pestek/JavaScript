UAM.InputView = function(view){

    this.view = view;

}

UAM.InputView.prototype.clear = function(){
    this.view.value = "";   
}

UAM.InputView.prototype.get = function(){
    return this.view.value;  
}

UAM.InputView.prototype.addNewElement = function(){
    inputCtrl.
}


UAM.ListView = function(view){

    this.view = view;
    
}

UAM.ListView.prototype.add = function(name){
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





