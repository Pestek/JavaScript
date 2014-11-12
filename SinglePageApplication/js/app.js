window.addEventListener('DOMContentLoaded', function () {
	//After the page structure is loaded

	var store = new UAM.Store();
    
    
   

	var inputView = new UAM.InputView(document.querySelector('#input-view'));
	var listView = new UAM.ListView(document.querySelector('#list-view'));
	var footerView = new UAM.FooterView(document.querySelector('#footer-view'));

	new UAM.InputCtrl(inputView, store);
	new UAM.ListCtrl(listView, store);
	new UAM.FooterCtrl(footerView, store);
    
    
    
    

    
    
});
