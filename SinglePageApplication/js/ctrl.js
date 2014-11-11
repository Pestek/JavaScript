function UAM.InputCtrl(inputView, store){

    this.view = inputView; 
    this.model = store;
    
    
    var name = InputView.get();
    store.emit("add",name);

}



function UAM.ListCtrl(inputView, store){
    
    
}

function UAM.FooterCtrl(inputView, store){
    
    
}


