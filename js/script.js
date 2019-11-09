$(document).ready(function () {



function Pizza(size, crust, toppings){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
 

Pizza.prototype.CrustPrice = function(){

    if(this.size==="large"){
        return 900;
    }else if(this.size=="medium"){
        return 500;
    }else{
        return 300;
    }
}

var toppingsPrices = {onion:10, beef:100};

Pizza.prototype.ToppingsPrice = function(){
    if(this.size=="large"){
        return toppingsPrices[this.toppings]*3;
    }else if(this.size=="medium"){
        return toppingsPrices[this.toppings]*2;
    }else{
        return toppingsPrices[this.toppings];
    }
}

var pizza1 = new Pizza("large", "crispy","onion");



console.log(pizza1.size+ " "+pizza1.CrustPrice() + " ngoiri "+ pizza1.ToppingsPrice());


});