$(document).ready(function () {

    var toppingsPrices = {Onion:10, Beef:100, Vegetable:100,Chicken:200};
    var crustPrices = {crispy: 100, stuffed:200, glutten_free: 300};

    $.each(toppingsPrices,function(k,v){
        var option = '<option value="'+k+'">'+k+'</option>';
        $("#select-toppings").append(option);
    });

    $.each(crustPrices,function(k,v){
        var option = '<option value="'+k+'">'+k+'</option>';
        $("#select-crust").append(option);
    });



function Pizza(size, crust, toppings){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
 

Pizza.prototype.SizePrice = function(){

    if(this.size==="large"){
        return 900;
    }else if(this.size=="medium"){
        return 500;
    }else{
        return 300;
    }
}


Pizza.prototype.ToppingsPrice = function(){
    if(this.size=="large"){
        return toppingsPrices[this.toppings]*3;
    }else if(this.size=="medium"){
        return toppingsPrices[this.toppings]*2;
    }else{
        return toppingsPrices[this.toppings];
    }
}



Pizza.prototype.CrustPrice = function(){
    if(this.size=="large"){
        return crustPrices[this.crust];
    }else if(this.size=="medium"){
        return crustPrices[this.crust];
    }else{
        return crustPrices[this.crust];
    }
}


var pizza1 = new Pizza("large", "crispy", "onion");

console.log(pizza1.size + " "+pizza1.SizePrice() + " ngoiri "+ pizza1.ToppingsPrice() + pizza1.CrustPrice());



$("#btn-add-to-cart").click(function(e){
    e.preventDefault();
   
    var size = $("select[name='size']").val();
    var crust = $("select[name='crust']").val();
    var toppings = $("select[name='toppings']").val();
    var quantity = $("input[name='quantity']").val();

    var pizza = new Pizza(size, crust, toppings);

    var sizePrice = pizza.SizePrice();
    var crustPrice = pizza.crustPrice();
    var toppingPrice = pizza.ToppingsPrice();
    var total = (sizePrice + crustPrice + toppingPrice ) * quantity;

    var orderItem = "<li>"+quantity+" "+size+" "+crust+" with "+toppings + " toppings <br> Total Ksh ."+total+"</li>";

    $("#list").append(orderItem);

})

});