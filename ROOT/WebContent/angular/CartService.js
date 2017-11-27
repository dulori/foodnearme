/**
 * 
 */
/**
 * 
 */
app.service('CartService', CartService);

function CartService($rootScope,AlertService,$localStorage) {
	
	this.addCartItem = function(item) {
		var index = $localStorage.cartItems.indexOf(item);
		if(index ==-1 ){
			$localStorage.cartItems.push(item);
		}else{
			AlertService.warningMessage(item.name +" already added in cart");
		}
	};
	
	this.updateItemQty=function(item,addQty){
		var index = $localStorage.cartItems.indexOf(item);
		if(index !=-1 ){
			if(($localStorage.cartItems[index].qty>=1 && addQty==-1) || (addQty==1)){
				$localStorage.cartItems[index].qty+=addQty;
				this.calculateTotal();
			}else{
				AlertService.warningMessage(item.name +"item Qty cannot be Zero ");
				//this.removeItem(item);
			}
		}else{
			AlertService.warningMessage(item.name +"item Qty cannot be Zero");
		}
	}
	
	this.getDeliveryCharges=function(){
		return 20;
	}
	this.calculateTotal=function(){
		totalvalue=0;
		angular.forEach($localStorage.cartItems, function(value, key){
			totalvalue=totalvalue+(value.price * value.qty);
		});
		return totalvalue;
	}
	
	this.initCartItems = function() {
		$localStorage.cartItems = $localStorage.cartItems || [];
	};

	this.removeItem = function(item) { 
		  var index = $localStorage.cartItems.indexOf(item);
		  $localStorage.cartItems.splice(index, 1);     
	}
}