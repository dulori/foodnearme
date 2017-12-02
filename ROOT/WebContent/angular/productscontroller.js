/**
 * 
 */
app.controller('productscontroller', productscontroller);

function productscontroller($scope, $location, SearchService, $q, $timeout,CartService) {
	var self = this;
	
	$scope.showModal=false;
	$scope.open = function() {
		$scope.showModal = false;
	};

	$scope.ok = function() {
		$scope.showModal = false;
	};

	$scope.cancel = function() {
		$scope.showModal = false;
	};
	
	
	CartService.initCartItems();

	$scope.dataLoading = false;
	$scope.changeAddress=false;
	$scope.enabledAddressField=function enabledAddressField(){
		$scope.changeAddress=$scope.changeAddressField;
	}
	
	$scope.subtotalValue=CartService.calculateTotal();
	$scope.deliveryCharges=CartService.getDeliveryCharges();
	
	$scope.listproductitems = getListproductsItems();
	
	$scope.addproductitems = function productitems(item) {
		CartService.addCartItem(item);
		$scope.subtotalValue=CartService.calculateTotal();
	}
	
	$scope.removeProductItems = function productitems(item) {
		CartService.removeItem(item);
		$scope.subtotalValue=CartService.calculateTotal();
	}
	$scope.updateProductItemsQty = function productitems(item,addqty) {
		CartService.updateItemQty(item,addqty);
		$scope.subtotalValue=CartService.calculateTotal();
	}
	
	$scope.validatePaymentDetails = function() {
		$scope.dataLoading = true;
		$timeout(function(){
			$scope.dataLoading = false;
			AlertService.errorMessage("Order Place successfully");
        }, 2000);
	};
	
	function getListproductsItems() {

		
		// get Products from
		var listproductitems = [{
			"id":"1",
			"name" : "Product 1",
			"description" : "product 1 Description add here",
			"price" : "500",
			"qty":0,
			"ordertype":{"takeaway":true,"delivery":false}
		},{
			"id":"2",
			"name" : "Product 2",
			"description" : "product 2 Description add here",
			"price" : "600",
			"qty":0,
			"ordertype":{"takeaway":true,"delivery":true}
		},{
			"id":"3",
			"name" : "Product 3",
			"description" : "product 3 Description add here",
			"price" : "700",
			"qty":0,
			"ordertype":{"takeaway":true,"delivery":true}
		},{
			"id":"4",
			"name" : "Product 4",
			"description" : "product 4 Description add here",
			"price" : "400",
			"qty":0,
			"ordertype":{"takeaway":false,"delivery":true}
		},{
			"id":"5",
			"name" : "Product 5",
			"description" : "product 5 Description add here",
			"price" : "300",
			"qty":0,
			"ordertype":{"takeaway":true,"delivery":false}
		},{
			"id":"6",
			"name" : "Product 6",
			"description" : "product 6 Description add here",
			"price" : "450",
			"qty":0,
			"ordertype":{"takeaway":true,"delivery":true}
		},{
			"id":"7",
			"name" : "Product 7",
			"description" : "product 7Description add here",
			"price" : "5500",
			"qty":0,
			"ordertype":{"takeaway":false,"delivery":true}
		}];
		console.log(listproductitems); 
		return listproductitems;
	}
}