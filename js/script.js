$(document).ready(function () {



function Pizza(size, crust, toppings){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
 

Pizza.prototype.CrustPrice= function(){
    if(Pizza.size"large"){
        return 900;
    }else if(Pizza.size=="medium"){
        return 500;
    }else{
        return 300;
    }
}

var toppingsPrices = {onion:10, beef:100};

Pizza.prototype.ToppingsPrice = function(){
    if(Pizza.size=="large"){
        return toppingsPrices[Pizza.toppings]*3;
    }else if(Pizza.size=="medium"){
        return toppingsPrices[Pizza.toppings]*2;
    }else{
        return toppingsPrices[Pizza.toppings];
    }
}

var pizza1 = new Pizza("large", "crispy","beef");



console.log(pizza1.size+ " "+pizza1.CrustPrice());


});