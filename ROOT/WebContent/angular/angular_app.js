/**
 * 
 */
var app = angular.module('MyApp', [ 'ngMaterial', 'ngMessages', 'ngRoute' ,'ngCookies','ui.bootstrap.modal','ngStorage','webcam']);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "indexcontent.html"
	}).when("/list", {
		templateUrl : "listpage.html",
		controller : "listdisplaycontroller"
	}).when("/login", {
		templateUrl : "login.html",
		controller : "LoginController"
	}).when("/cheflogin", {
		templateUrl : "cheflogin.html",
		controller : "LoginController"
	}).when("/register", {
		templateUrl : "register.html",
		controller : "LoginController"
	}).when("/forgotpassword", {
		templateUrl : "forgotpassword.html"
	}).when("/menuoption", {
		templateUrl : "detail_page.html",
		controller : "productscontroller"
	}).when("/ordercart", {
		templateUrl : "cart.html",
		controller : "productscontroller"
	}).when("/orderdetails", {
		templateUrl : "orderdetails.html",
		controller : "productscontroller"
	}).when("/chefhome", {
		templateUrl : "chefhome.html",
		controller : "managechefcontroller"
	});
});


app.run(['$rootScope', '$location', '$cookieStore', '$http','$localStorage',
      function ($rootScope, $location, $cookieStore, $http, $localStorage) {
          // keep user logged in after page refresh
          $rootScope.globals = $cookieStore.get('globals') || {};
          $rootScope.cartItems=$localStorage.cartItems || [];
          
          console.log("rootscope cart : "+$rootScope.cartItems);
          console.log("local storage cart : "+$localStorage.cartItems);
          
          
          if ($rootScope.globals.currentUser) {
              $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
          }
    
          $rootScope.$on('$locationChangeStart', function (event, next, current) {
              // redirect to login page if not logged in
        	  if ($location.path() !== '/cheflogin' && $location.path() !== '/login' && $location.path() !== '/' && $location.path() !== '/register' && $location.path() !== '/list' && !$rootScope.globals.currentUser) {
                  if($location.path() === '/'){
                	  $location.path('/');
                  }else{
                	  $location.path('/login');
                  }
              }
          });
      }]);


app.directive('creditCardType',function(){
    var directive =
      { require: 'ngModel'
      , link: function(scope, elm, attrs, ctrl){
          ctrl.$parsers.unshift(function(value){
            scope.ccinfo.type =
              (/^5[1-5]/.test(value)) ? "mastercard"
              : (/^4/.test(value)) ? "visa"
              : (/^3[47]/.test(value)) ? 'amex'
              : (/^6011|65|64[4-9]|622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5]))/.test(value)) ? 'discover'
              : undefined
            ctrl.$setValidity('invalid',!!scope.ccinfo.type)
            return value
          })
        }
      }
    return directive
    }
  )

app.directive('cardExpiration', function() {
	var directive = {
		require : 'ngModel',
		link : function(scope, elm, attrs, ctrl) {
			scope.$watch('[ccinfo.month,ccinfo.year]', function(value) {
				ctrl.$setValidity('invalid', true)
				if (scope.ccinfo.year == scope.currentYear
						&& scope.ccinfo.month <= scope.currentMonth) {
					ctrl.$setValidity('invalid', false)
				}
				return value
			}, true)
		}
	}
	return directive
});
