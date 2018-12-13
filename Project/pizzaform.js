var theForm = document.forms["pizzaform"];




<script>		
		
		var pizza_prices = new Array();
		pizza_prices["personal"]=6;
		pizza_prices["medium"]=10;
		pizza_prices["large"]=14;
		pizza_prices["extra large"]=16;
		
</script>
				<script>
				// getPizzaSizePrice() finds the price based on the size of the pizza.
				// Here, we need to take user's the selection from radio button selection
				function getPizzaSizePrice()
				{
					var PizzaSizePrice=0;
					//Get a reference to the form id="pizzaform"
					var theForm = document.forms["pizzaform"];
					//Get a reference to the pizza the user Chooses name=selectedPizza":
					var selectedPizza = theForm.elements["selectedpizza"];
					//Here since there are 4 radio buttons selectedPizza.length = 4
					//We loop through each radio buttons
					for(var i = 0; i < selectedPizza.length; i++)
					{
						//if the radio button is checked
						if(selectedPizza[i].checked)
				{
					//we set pizzaSizePrice to the value of the selected radio button
					//i.e. if the user choose the "medium" pizza we set it to 25
					//by using the pizza_prices array
					//We get the selected Items value
					//For example pizza_prices["personal".value]"
					pizzaSizePrice = pizza_prices[selectedPizza[i].value];
					//If we get a match then we break out of this loop
					//No reason to continue if we get a match
					break;
				}
			}
			//We return the PizzaSizePrice
			return PizzaSizePrice;
		}
			</script>

<script>
		var meats_prices= new Array();
		Meats_prices["None"]=0;
		Meats_prices[""]=0;
		Meats_prices[""]=0;
		Meats_prices[""]=0;
		Meats_prices[""]=0;
		Meats_prices["Extra Meats"]= 1;
		
</script>


<script>

//This function finds the meats_prices price based on the //drop down selection
		function getMeatsPrice()
		{
			var MeatsPrice=0;
			//Get a reference to the form id="pizzaform"
			var theForm = document.forms["pizza"];
			//Get a reference to the select id="Meats"
			 var selectedMeats = theForm.elements["Meats"];
		 
			//set Meats Price equal to value user chose
			//For example Meats_prices["sausage".value] would be equal to 0
			<!-- MeatsPrice = Meats_prices[selectedMeats.value]; -->
		 
			//finally we return MeatsPrice
			return MeatsPrice;
		}

		
		<script>
		
			//ToppingsPrice() finds the Toppings price based on a check box selection
			function ToppingsPrice()
		{
			var ToppingsPrice=0;
			//Get a reference to the form id="pizzaform"
			var theForm = document.forms["pizzaform"];
			//Get a reference to the checkbox id="includetoppings"
			var includeToppings = theForm.elements["includetoppings"];
		 
			//If they checked the box set ToppingsPrice to 1
			if(includeToppings.checked==true)
			{
				ToppingsPrice=1;
			}
			//finally we return the ToppingsPrice
			return ToppingsPrice;
		}

		</script>
		
		
<script>
		
		function getQuantity()
{
    //Assume form with id="theform"
    var theForm = document.forms["pizzaform"];
    //Get a reference to the TextBox
    var quantity = theForm.elements["quantity"];
    var howmany =0;
    //If the textbox is not blank
    if(quantity.value!="")
    {
        howmany = parseInt(quantity.value);
    }
return howmany;
}

</script>

<script>
function getTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var PizzaPrice = getselectedpizzaPrice() + getMeatsPrice() + getcheesePrice() +
                          ToppingsPrice() + CrustPrice();
 
    //display the result
    document.getElementById('totalPrice').innerHTML =
                                      "Total Price For Pizza $"+PizzaPrice;
 
}
</script>