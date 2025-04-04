/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: natasha
      Date:   

      Filename: project03-01.js
*/

let menuItems = document.getElementsByClassName("menuItem");

for (let i = 0; i < menuItems.length; i++){
      window.addEventListener("click",calcTotal);


}

function calcTotal(){
      var orderTotal = 0;
      for (var i = 0;i<menuItems.length;i++){
            if(menuItems[i].checked === true){
                  orderTotal += Number(menuItems[i].value);
            }
            document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
      }
 }

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
 
 