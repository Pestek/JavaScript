window.addEventListener('DOMContentLoaded', function () {
	//After the page structure is loaded

	var store = new UAM.Store();
    
   

	var inputView = new UAM.InputView(document.querySelector('#input-view'));
	var listView = new UAM.ListView(document.querySelector('#list-view'));
	var footerView = new UAM.FooterView(document.querySelector('#footer-view'));

	var inputCtrl = new UAM.InputCtrl(inputView, store);
	var listCtrl = new UAM.ListCtrl(listView, store);
	var footerCtrl = new UAM.FooterCtrl(footerView, store);
    
    store.on("add",function(name){
        store.add(name);
        
    });
    
    var btn = document.querySelector("#input-button");
    btn.addEventListener("click",function(){
        inputView.addNewElement();
    },false)
    
    
});
