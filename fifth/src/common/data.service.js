(function () {
"use strict";

angular.module('common')
.service('DataService', DataService);

function DataService() {
	var service=this;
  service.fname="";
  service.lname="";
  service.email="";
  service.number="";
  service.item="";
  service.title="";
  service.description="";
  service.getInfo=function(){
	  return {"fname":service.fname,"lname":service.lname,"email":service.email,"number":service.number,"item":service.item,"title":service.title,"description":service.description};
  }
  service.setInfo=function(data){
	  service.fname=data.fname;
	  service.lname=data.lname;
	  service.email=data.email;
	  service.number=data.number;
	  service.item=data.item;
	  service.title=data.title;
	  service.description=data.description;
  }
  

}



})();
