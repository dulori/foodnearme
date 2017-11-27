/**
 * 
 */

app.controller('listdisplaycontroller', listdisplaycontroller);

function listdisplaycontroller($scope, $location, SearchService, $q, $timeout,AlertService) {
	var self = this;

	self.listitems = getListShefs();
	$scope.listitems = getListShefs();

	self.querySearch = querySearch;
	function querySearch(query) {
		console.log(query);
		if(query==''){
			AlertService.warningMessage("you can not find any food supplyer within 25 mile of the radius to your zip code. please try with different Zip code");
		}
		var results = query ? search($scope.listitems, query)
				: $scope.listitems;
		
		return results;
	}

	function search(source, name) {
		var results = [];
		var index;
		var entry;

		name = name.toUpperCase();
		for (index = 0; index < source.length; ++index) {
			entry = source[index];
			if (entry && entry.address
					&& entry.address.toUpperCase().indexOf(name) !== -1) {
				results.push(entry);
			}
		}
		return results;
	}

	function createFilterFor1(query) {
		var lowercaseQuery = angular.lowercase(query);

		return function filterFn(listitem) {
			return !(angular.lowercase(listitem.address)
					.indexOf(lowercaseQuery) === -1);
		};
	}

	$scope.loadList = function loadList() {
		if (SearchService.searchValue === "") {
			AlertService.warningMessage("you can not find any food supplyer within 25 mile of the radius to your zip code. please try with different Zip code");
			$scope.listShef = getListShefs();
		} else {
			$scope.listShef = querySearch(SearchService.searchValue);
		}
		console.log(JSON.stringify($scope.listShef));
	};

	function getListShefs() {

		var listShef = [ {
			"star" : "4",
			"review" : "55",
			"name" : "Taco Mexican",
			"type" : "p",
			"address" : "Arkansas",
			"open" : "17:00",
			"minimum" : "15",
			"takeaway" : "Y",
			"Delivery" : "Y",
			"Category" : "Mexican / American"
		}, {
			"star" : "4",
			"review" : "55",
			"name" : "Taco California",
			"type" : "p",
			"address" : "California",
			"open" : "17:00",
			"minimum" : "15",
			"takeaway" : "Y",
			"Delivery" : "Y",
			"Category" : "Mexican / American"
		}, {
			"star" : "4",
			"review" : "55",
			"name" : "Alabama Mexican",
			"type" : "p",
			"address" : "Alabama",
			"open" : "17:00",
			"minimum" : "15",
			"takeaway" : "Y",
			"Delivery" : "Y",
			"Category" : "Mexican / American"
		}, {
			"star" : "4",
			"review" : "55",
			"name" : "Taco Alabama",
			"type" : "p",
			"address" : "Alabama",
			"open" : "17:00",
			"minimum" : "15",
			"takeaway" : "Y",
			"Delivery" : "Y",
			"Category" : "Mexican / American"
		}, {
			"star" : "4",
			"review" : "55",
			"name" : "Taco Hawaii",
			"type" : "p",
			"address" : "Hawaii",
			"open" : "17:00",
			"minimum" : "15",
			"takeaway" : "Y",
			"Delivery" : "Y",
			"Category" : "Mexican / American"
		}, {
			"star" : "4",
			"review" : "55",
			"name" : "Hawaii Mexican",
			"type" : "p",
			"address" : "Hawaii",
			"open" : "17:00",
			"minimum" : "15",
			"takeaway" : "Y",
			"Delivery" : "Y",
			"Category" : "Mexican / American"
		}, {
			"star" : "4",
			"review" : "55",
			"name" : "New Jersey",
			"type" : "p",
			"address" : "New Jersey",
			"open" : "17:00",
			"minimum" : "15",
			"takeaway" : "Y",
			"Delivery" : "Y",
			"Category" : "Mexican / American"
		} ];
		return listShef;
	}

	$scope.loadList();
}

app.controller('DemoCtrl', DemoCtrl);

function DemoCtrl($scope, $timeout, $q, $window, $location, SearchService, $route, CartService) {
	var self = this;

	// list of `state` value/display objects
	self.states = loadAll();
	self.selectedItem = null;
	self.searchText = null;
	self.querySearch = querySearch;

	$scope.subtotalValue=CartService.calculateTotal();
	$scope.deliveryCharges=CartService.getDeliveryCharges();
	
	$scope.updateProductItemsQty = function productitems(item,addqty) {
		CartService.updateItemQty(item,addqty);
		$scope.subtotalValue=CartService.calculateTotal();
	}
	
	$scope.showModal=false;
	
	self.open = function () {
		$scope.showModal = true;
    };

    self.ok = function () {
    	
        $scope.showModal = false;
    };

    self.cancel = function () {
        $scope.showModal = false;
    };
    
    self.submitOrder = function(){
    	$scope.showModal = false;
    	$location.path("/orderdetails");
    }
	
	
	$scope.searchValue = "";

	self.selectedItemChange = selectedItemChange;
	self.searchTextChange = searchTextChange;

	function searchTextChange(text) {
		$scope.searchValue = text;
	}
	function selectedItemChange(item) {
		$scope.searchValue = item.display;
	}

	/**
	 * Search for states... use $timeout to simulate remote dataservice call.
	 */
	function querySearch(query) {
		
		
		var results = query ? self.states.filter(createFilterFor(query))
				: self.states;
		var deferred = $q.defer();
		$timeout(function() {
			deferred.resolve(results);
		}, Math.random() * 100, false);
		return deferred.promise;
	}

	$scope.searchShef = function() {
		SearchService.searchValue = $scope.searchValue;
		if ($location.url() === "/list") {
			$route.reload();
			console.log("Same URL");
		} else {
			$location.url("/list");
			console.log("different Url");
		}
	}

	function loadAll() {
		var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

		return allStates.split(/, +/g).map(function(state) {
			return {
				value : state.toLowerCase(),
				display : state
			};
		});
	}

	/**
	 * Create filter function for a query string
	 */
	function createFilterFor(query) {
		var lowercaseQuery = angular.lowercase(query);

		return function filterFn(state) {
			return !(state.value.indexOf(lowercaseQuery) === -1);
		};

	}
}


/**
 * 
 */

app.controller('PayemtController', PayemtController);

function PayemtController($scope, $rootScope, $location, $timeout, AlertService,CartService) {
	
}



