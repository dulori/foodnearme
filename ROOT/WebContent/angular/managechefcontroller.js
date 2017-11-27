/**
 * 
 */
app.controller('managechefcontroller', managechefcontroller);

function managechefcontroller($scope, $location, SearchService, $q, $timeout,CartService,AlertService) {
	var self = this;
		
	$scope.listproductitems = getListproductsItems();
	$scope.listItemCategory = getListItemCategory();
		
	function getListproductsItems() {
		
	var listproductitems = [{
			"id":"1",
			"name" : "Product 1",
			"description" : "product 1 Description add here",
			"price" : "500",
			"qty":0,
			"ordertype":{"takeaway":true,"delivery":false},
			"survetime":"10 AM",
			"ingrediants":"ingrediants",
			"category":"Starters",
			"subcategory":"Sub Category",
			"popularity":true
		},{
			"id":"2",
			"name" : "Product 2",
			"description" : "product 2 Description add here",
			"price" : "600",
			"qty":0,
			"ordertype":{"takeaway":true,"delivery":true},
			"survetime":"10 AM",
			"ingrediants":"ingrediants",
			"category":"Starters",
			"subcategory":"Sub Category",
			"popularity":false
		},{
			"id":"3",
			"name" : "Product 3",
			"description" : "product 3 Description add here",
			"price" : "700",
			"qty":0,
			"ordertype":{"takeaway":true,"delivery":true},
			"survetime":"10 AM",
			"ingrediants":"ingrediants",
			"category":"Starters",
			"subcategory":"Sub Category",
			"popularity":true
		},{
			"id":"4",
			"name" : "Product 4",
			"description" : "product 4 Description add here",
			"price" : "400",
			"qty":0,
			"ordertype":{"takeaway":false,"delivery":true},
			"survetime":"10 AM",
			"ingrediants":"ingrediants",
			"category":"Starters",
			"subcategory":"Sub Category",
			"popularity":true
		},{
			"id":"5",
			"name" : "Product 5",
			"description" : "product 5 Description add here",
			"price" : "300",
			"qty":0,
			"ordertype":{"takeaway":true,"delivery":false},
			"survetime":"10 AM",
			"ingrediants":"ingrediants",
			"category":"Starters",
			"subcategory":"Sub Category",
			"popularity":true
		},{
			"id":"6",
			"name" : "Product 6",
			"description" : "product 6 Description add here",
			"price" : "450",
			"qty":0,
			"ordertype":{"takeaway":true,"delivery":true},
			"survetime":"10 AM",
			"ingrediants":"ingrediants",
			"category":"Starters",
			"subcategory":"Sub Category",
			"popularity":false
		},{
			"id":"7",
			"name" : "Product 7",
			"description" : "product 7Description add here",
			"price" : "5500",
			"qty":0,
			"ordertype":{"takeaway":false,"delivery":true},
			"survetime":"10 AM",
			"ingrediants":"ingrediants",
			"category":"Starters",
			"subcategory":"Sub Category",
			"popularity":false
		}];
		return listproductitems;
	}
	
	function getListItemCategory() {
		var listItemCategory = [{
				"id":"1",
				"name" : "Starters",
				"description" : "Starters : Description add here",
				"size":"1"
			},{
				"id":"2",
				"name" : "Main Courses ",
				"description" : "Main Courses  :  Description add here",
				"size":"1"
			},{
				"id":"3",
				"name" : "Beef",
				"description" : "Beef : Description add here",
				"size":"1"
			},{
				"id":"4",
				"name" : "Desserts",
				"description" : "Desserts : Description add here",
				"size":"1"
			},{
				"id":"5",
				"name" : "Drinks",
				"description" : "Drinks : Description add here",
				"size":"1"
			},{
				"id":"6",
				"name" : "Pizza",
				"description" : "Pizza : Description add here",
				"size":"1"
			},{
				"id":"7",
				"name" : "Soups",
				"description" : "Soups : Description add here",
				"size":"1"
			}];
			console.log("Legnth : "+listItemCategory.lenght);
			return listItemCategory;
		}
	
	$scope.publishItem={};
	
	$scope.addPublishItem=function(){
		$scope.publishItem.id=$scope.listproductitems.lenght + 1;
		$scope.listproductitems.push($scope.publishItem); 
		AlertService.successMessage("Data Added Successfully");
		$scope.publishItem={};
	}
	
	$scope.time = {
		      twelve: new Date(),
		      twentyfour: new Date()
		    };

		    $scope.message = {
		      hour: 'Hour is required',
		      minute: 'Minute is required',
		      meridiem: 'Meridiem is required'
		    }
	
}