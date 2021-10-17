
let num  = prompt("how many of children ?" )  ;
let num1  = prompt("partner's name ?" )  ;
let num2  = prompt("geographic location ?" )  ;
let num3  = prompt("job title ?" )  ;


future = 'You will be a ' + num3 + ' in ' + num2 + ', and married to ' +
   num1 + ' ' + ' with ' + num + ' kids.';
console.log(future);

let ega = prompt("Enter your tempret ..?")

function celsiusToFahrenheit(celsius) {
   var celsiusInF = (celsius * 9) / 5 + 32;
   console.log(celsius + '°C is ' + celsiusInF + '°F');
}

function fahrenheitToCelsius(fahrenheit) {
   var fahrenheitInC = ((fahrenheit - 32) * 5) / 9;
   console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
}


fahrenheitToCelsius(20);
celsiusToFahrenheit(20);



let ega1 = prompt("Enter your ega ..?")

function calculateAge(birthYear) {
   var age1 = new Date().getFullYear() - birthYear;
   console.log('You are either ' + age1 + ' or ' + (age1 - 1));
}
