
    
var coffee_prices = new Array();
coffee_prices["Espresso($5)"]=5;
coffee_prices["Moca($7)"]=7;
coffee_prices["latte($5)"]=5;
coffee_prices["cold coffee($8)"]=8;
function getCoffeePrice(){
    var CoffeePrice=0;
    var form=document.forms["coffeeform"];
    var selectedCoffee=form.elements["selectedcoffee"];

/*for(var i=0;i<seletedCoffee.length();i++){
if(selectedCoffee[i].checked){
CoffeePrice=coffee_prices[selectedcoffee[i].value];
break;
}*/
var cofVal = document.querySelector('input[name="Coffee Type"]:checked').value;

CoffeePrice=coffee_prices[cofVal];
return CoffeePrice;
}

var flavour_price = new Array();
var filling_prices = new Array();
filling_prices["None"]=0;
filling_prices["choclate"]=10;
filling_prices["vanila"]=5;
filling_prices["iced"]=5;
filling_prices["hot"]=5;
function getFlavourPrice(){
    var coffeeFlavourPrice=0;
    var form=document.forms["coffeeform"];
    //var selectedFlavour=form.elements["selectedFlavours"];
    var flaval=document.getElementById("flavours").value;
    coffeeFlavourPrice=filling_prices[flaval];
    return coffeeFlavourPrice;
}
function getsizePrice(){
    var sizePrice=0;
    var form=document.forms["coffeeform"];
   
    sizePrice = document.querySelector('input[name="size"]:checked').value;
    
    return sizePrice;
}
function getTotal(){
    var coffeePrice = getCoffeePrice();
    
   
    var flavourPrice=getFlavourPrice();
    var sizeprice=getsizePrice();
    

    var coffeeFinalPrice=Number(coffeePrice)+Number(flavourPrice)+Number(sizeprice);
    document.getElementById('totalPrice').value="coffe price is $"+coffeeFinalPrice;
}


 