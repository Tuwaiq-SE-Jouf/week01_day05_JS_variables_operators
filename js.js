/*
let yearOfBirth = prompt("Enter your year of birth");
let theCurrentYear = prompt("Enter the current year");

function ageCalculator(num1,num2){
    console.log("Your Age is " + (num1-num2));
}


ageCalculator(yearOfBirth,theCurrentYear);


function Ask() {
    let numberOfChildren = prompt("How many kids do you have ?");
    let partnerName = prompt("Type your partner's name ?");
    let geoLocation = prompt("Where do you live?");
    let job = prompt("what is your job?");
    return console.log("You will be a " + job + " in " + geoLocation + " and married to " + partnerName + " With " + numberOfChildren + " Kids");

   

}
Ask();

*/

let radius = prompt("Enter the radius:");

function radiusCalculator(num1){




circumFerence = 2 * radius * 3.14;
area = radius * radius * 3.14;

console.log("The circumference is" + circumFerence);
console.log("The area is" + area);
}

radiusCalculator(radius)