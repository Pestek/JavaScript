UAM.InputCtrl = function (inputView, store){

    inputView.on("clickBtn",function(name){
        store.add(name);
    });
    
}



UAM.ListCtrl = function (listView, store){
    
    store.on("add",function(data){
        listView.addNewListElement(data);
    });
    
}

UAM.FooterCtrl = function (inputView, store){
    
    
}


