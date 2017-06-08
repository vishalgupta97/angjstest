(function(){
	'use strict';
	angular.module('NarrowItDownApp',[])
	.controller('NarrowItDownController',NarrowItDownController)
	.service('MenuSearchService',MenuSearchService)
	.directive('foundItems',FoundItemsDirective)
	.constant('path','https://davids-restaurant.herokuapp.com/menu_items.json');
	function FoundItemsDirective()
	{
		var ddo = {
			templateUrl: 'menuList.html',
			scope: {
			  found: '<',
			  onRemove: '&'
			}
		};
		return ddo;
	}
	NarrowItDownController.$inject=['MenuSearchService'];
	function NarrowItDownController(MenuSearchService)
	{
		var ctrl=this;
		ctrl.searchTerm="";
		ctrl.found=[];
		ctrl.msg="";
		ctrl.narrowBtnClick=function(){
			ctrl.found=[];
			if(ctrl.searchTerm=="")
				ctrl.msg="Nothing Found";
			else
			{
				MenuSearchService.getMatchedMenuItems(this.searchTerm).then(function(response){
					if(response.length==0)
					ctrl.msg="Nothing Found";
				else
				{
					ctrl.msg="";
					ctrl.found=response;
				}
				});
			}
		};
		ctrl.removeItem=function(index){
			ctrl.found.splice(index,1);
		};
	}
    MenuSearchService.$inject=['$http','path'];
	function MenuSearchService($http,path)
	{
	   this.getMatchedMenuItems=function(term){
		   return $http({
			method: "GET",
			url: path
		}).then(function(result){
			var list=result.data.menu_items;
			var found_list=[];
			list.forEach(function(data){
				if(data.description.indexOf(term)!=-1)
					found_list.push(data);
			});
			return found_list;
		}).catch(function(error){
			console.log(error);
		});
		};
	}
})();