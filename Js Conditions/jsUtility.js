

function openModal(){
	console.log("button clicked");
var overlay=document.getElementById("overlay");
overlay.setAttribute("class","overlay overlay-active");
var modalactive=document.getElementById("modalsection");
modalactive.setAttribute("class","modal-section modal-active");
}


function closeButton(){

var modalactive=document.getElementById("modalsection");
modalactive.setAttribute("class","modal-section modal-notactive");
	var overlay=document.getElementById("overlay");
	overlay.setAttribute("class","overlay overlay-notactive");
}



function  showDropdown(){

	var dropdown = this.parentNode.getElementsByClassName("dropdown-list")[0];
	console.log(this.parentNode.getElementsByClassName("dropdown-list")[0])
	console.log(dropdown.className);
	if(dropdown.className=="dropdown-list list-active")
	{
      dropdown.className="dropdown-list list-notactive";
      console.log(dropdown.className);
	}
    else
    {
    	dropdown.className="dropdown-list list-active";
    }	
}

function collapsible() {
	var collap= this.parentNode.getElementsByClassName("collap-content")[0];
	console.log(this.parentNode.getElementsByClassName("collap-content")[0])
	console.log(collap.className);
	if(collap.className=="collap-content collap-active")
	{
      collap.className="collap-content";
	}
	else
	{
      collap.className="collap-content collap-active";
	}
}

function tabsShow()
{
 var tabClass = this.children[0].getAttribute("href");
this.parentNode.getElementsByClassName("tabs-content-active")[0].className="";//sets the current list inactive
this.parentNode.parentNode.getElementsByClassName("tabs-content-active")[0].className="";// sets the tans inactive
tabClassId = tabClass.substr(1,tabClass.length);
 
document.getElementById(tabClassId).setAttribute("class","tabs-content-active");
this.children[0].parentNode.className="tabs-content-active";


 

}


function bindEvents(){

document.getElementById("close").addEventListener('click',closeButton,false);
document.getElementById("btnmodal").addEventListener('click',openModal,false);

var listClicked =document.getElementsByClassName("front-end");
for(var i =0; i<listClicked.length;i++)
{
	listClicked[i].addEventListener('click',showDropdown,false);
}

var collapClicked = document.getElementsByClassName("collap-header");
for(var i =0; i<collapClicked.length;i++ )
{
	collapClicked[i].addEventListener('click',collapsible,false);
}

var tabClicked =document.getElementsByClassName("tabs-nav")[0].children;
for(var i=0;i<tabClicked.length;i++)
{
	tabClicked[i].addEventListener('click',tabsShow,false);
}
}

window.onload=bindEvents();