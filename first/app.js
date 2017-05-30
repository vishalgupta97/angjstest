(function(){
	'use strict';
	angular.module('assignment1',[]).controller('LunchCheckController',LunchCheckController);
	LunchCheckController.$inject=['$scope']
	function LunchCheckController($scope)
	{
		$scope.food="";
		$scope.msg="";
		$scope.clickBtn=function(){
			if($scope.food!="")
			{
			var items=$scope.food.split(",");
			if(items.length>3)
				$scope.msg="Too Much!";
			else $scope.msg="Enjoy!";
		}
		else {
			$scope.msg="Please Enter data first";
		}
		}
	}

})();
