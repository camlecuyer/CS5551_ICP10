app.controller('MainController', ['$scope', '$http', function($scope, $http) { 
  	$scope.items = {
  		title: "Items",
  		list: []
  	}
  	
    $scope.getItem = function(itemList, item) {
      // ISBN : 10 or 13 length and consisdt of only numbers
        console.log(item);
        $http.get("https://api.indix.com/v2/summary/products?countryCode=US&q="+ item + "&app_key=w2xqtl4uBXLJnCk0zscGrt86TEh80bmx").success(function(data) {
          itemList.push("Name: " + data.result.products[0].title);
        })
  	}

}]);