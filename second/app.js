(function(){
	'use strict';
	angular.module('ShoppingListCheckOff',[]).controller('ToBuyController',ToBuyController).controller('AlreadyBoughtController',AlreadyBoughtController).service('ShoppingListCheckOffService',listService);
	ToBuyController.$inject=['ShoppingListCheckOffService'];
	AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService)
	{
		this.list=ShoppingListCheckOffService.toBuyList();
		this.bought=function(index1){
			ShoppingListCheckOffService.buyItem(index1);
		};
	}
	function AlreadyBoughtController(ShoppingListCheckOffService)
	{
		this.list=ShoppingListCheckOffService.boughtList();
	}
	function listService()
	{
		var toBuyItems=[{name:"cookies",quantity:"10"},{name:"biscuits",quantity:"20"},{name:"chocolate",quantity:"50"},
		            {name:"apples",quantity:"5"},{name:"bananas",quantity:"2"},{name:"guava",quantity:"7"}];
		var boughtItems=[];
		this.toBuyList=function(){return toBuyItems;};
		this.boughtList=function(){return boughtItems;};
        this.buyItem=function(index)
        {
			var obj=toBuyItems[index];
			boughtItems.push(obj);
			toBuyItems.splice(index,1);
		};		
	}
})();
