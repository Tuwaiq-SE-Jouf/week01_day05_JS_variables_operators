console.log("Vairables Operatores Lab ");
console.log("*************************");


console.log(" ** Task 1 **");
function theFortuneTeller(numOfChild, partner, loc, job){
    console.log("You will be a "+job+" in "+loc+", and married to "+partner+" with "+numOfChild+" kids.");
}
theFortuneTeller(3,"Fahad", "Aljouf", "WebDev");

console.log(" ** Task 2 **");
theAgeCalculator(2021,2000)
function theAgeCalculator(currentYear, birthYear){
    let age = currentYear - birthYear
    console.log("They are "+ age +" years old")
}

console.log(" ** Task 3 **");

function Geometrizer(radius){
    //GOOGLE FRINDE
    let area = 3.14*Math.pow(radius,2);
    let circumference=3.14*2*radius;
    
    console.log("The Area will be = "+ area)
    console.log("The Circumference will be = "+ circumference)
    
} 
console.log(" If the geometrizer = 2 ");
Geometrizer(2)