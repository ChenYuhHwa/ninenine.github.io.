 var myHeading = document.querySelector('h1');
 myHeading.textContent = multiply(4,7);
 function multiply(num1,num2) {
   let result = num1 * num2;
   return result;
  }
 multiply(4,7);
 multiply(20,20);
 multiply(0.5,3);
 document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
 }