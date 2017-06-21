(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);
InfoController.$inject=['data','ApiPath'];
function InfoController(data,path) {
	this.notreg=false;
	this.basePath=path;
	if(data.fname=="")
	{
		this.notreg=true;
	}
	else
	{
		this.fname=data.fname;
	  this.lname=data.lname;
	  this.email=data.email;
	  this.number=data.number;
	  this.sname=data.item;
	  this.title=data.title;
	  this.description=data.description;
	}
}


})();
