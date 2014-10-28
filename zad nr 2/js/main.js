$(document).ready(function () {
    
    //active po kliknieciu 

    var project = project || {}; // the only global variable
    project.MODEL = project.MODEL || {}; // model of our project
    project.CONTROLLER = project.CONTROLLER || {}; // controller of our project
    project.VIEW = project.VIEW || {}; // view of our project

    //  CONTROLLERS

    project.CONTROLLER.init = (function () {

        project.CONTROLLER.events();

    });
    
    
    
    project.CONTROLLER.addNewListElement = (function (){
        var helper = document.querySelector("#data-text");
        if(!project.MODEL.isInList(helper.value)) {
            project.VIEW.addNewListElement(helper.value); 
            project.MODEL.addNewElement(helper.value);
        }
    })
    
    project.CONTROLLER.deleteElementFromList = (function(element){
        console.log(element.parentElement);
        fff=element.parentElement;
        project.MODEL.deleteElementFromList(element.parentElement);
        project.VIEW.deleteElementFromList(element);
    })

    //  VIEWS
    
    project.VIEW.addNewListElement = (function (textContent) {
        var newElement = document.createElement("li"),
            deleteButton = document.createElement("span");
            helper = document.querySelector("#data-list");
        newElement.innerHTML = textContent + "&nbsp;&nbsp;&nbsp;&nbsp;";
        newElement.setAttribute("data-name",textContent);
        deleteButton.textContent = "usun";
        deleteButton.classList.add("delete-button")
        newElement.appendChild(deleteButton);
        helper.appendChild(newElement);
    })
    
    project.VIEW.deleteElementFromList = (function (element) {
        element.parentElement.remove(); 
    })
    

    //  MODEL
    
    project.MODEL.dataList = [];
    
    project.MODEL.addNewElement = (function(textContent){
          project.MODEL.dataList.push(textContent);   
     //   console.log(project.MODEL.dataList);
    })
    
    project.MODEL.isInList = (function(textContent){
          return project.MODEL.dataList.indexOf(textContent) === -1 ? false : true;
    })
    
    project.MODEL.deleteElementFromList = (function(element){
        console.log(element.getAttribute("data-name"));
         project.MODEL.dataList.splice(project.MODEL.dataList.indexOf(element.getAttribute("data-name")),1);  
        aaaa = project.MODEL.dataList;
    })


 

    //  EVENTS

    project.CONTROLLER.events = (function () {
        
        document.querySelector("#button-add").addEventListener("click",function(){
            project.CONTROLLER.addNewListElement();
        });
        
        document.querySelector("#data-list").addEventListener("click",function(e){
            if(e.target.classList.contains("delete-button")) {
                project.CONTROLLER.deleteElementFromList(e.target);  
            }
        }); 
        
        document.querySelector("#data-list").addEventListener("click",function(e){
            if(e.target.tagName == "LI") {
                var helper = document.querySelectorAll("#data-list li");
                for(var i = 0; i<helper.length; ++i){
                    helper[i].classList.remove("active");   
                }
                
                e.target.classList.add("active");
            }
        });

    });

    //  PROJECT RUN

    project.CONTROLLER.init();


});

