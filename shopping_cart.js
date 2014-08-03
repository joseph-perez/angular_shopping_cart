var myApp = angular.module("shoppingCart", []);

myApp.controller("shoppingCartController", ["$scope", function($scope)
{
	$scope.items = 
	[
		{
			title: "Macbook Air",
			price: 1000,
			quanity: 1
		},

		{
			title: "USB cable",
			price: 10,
			quanity: 5
		},

		{
			title: "HDMI cables",
			price: 15,
			quanity: 11
		}
	]

	$scope.remove = function(index)
	{
		$scope.items.splice(index, 1);
	}
}]);