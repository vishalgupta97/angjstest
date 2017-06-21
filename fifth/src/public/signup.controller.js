(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);
SignupController.$inject=['DataService','ApiPath','$http'];
function SignupController(DataService,path,$http) {
	var ctrl=this;
	ctrl.saved=false;
	ctrl.menuerror=false;
  ctrl.submit=function()
  {
	  ctrl.menuerror=false;
	  $http({
      method: "GET",
      url: (path + "/menu_items/"+ctrl.item+".json")
    }).then(function(response){
		var data=response.data;
		DataService.setInfo({fname:ctrl.fname,lname:ctrl.lname,email:ctrl.email,number:ctrl.number,item:ctrl.item,title:data.name,description:data.description});
	    ctrl.saved=true;
	}).catch(function(error){
		ctrl.item="";
		ctrl.menuerror=true;
	});
  };
}


})();
