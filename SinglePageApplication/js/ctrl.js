UAM.InputCtrl = function (inputView, store){
    inputView.on("clickBtn",function(name){
        store.add(name);
    });
    
    store.on("clearInput",function(){
        inputView.clear();
    });
}

UAM.ListCtrl = function (listView, store){
    
    store.on("add",function(data){
        listView.addNewListElement(data);
    });
    
    listView.on("elmentToogleStore",function(name){
        store.elementToggle(name);
    });
    
     store.on("elmentToogleView",function(name){
        listView.toggleElement(name);
    });
    
}

UAM.FooterCtrl = function (footerView, store){
    
    store.on("updateFooter",function(all,active){
        footerView.update(all,active);
    });
    
}


