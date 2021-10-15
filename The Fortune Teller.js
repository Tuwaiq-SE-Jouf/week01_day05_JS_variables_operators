function Ask() {
    let numberOfChildren = prompt("How many kids do you have ?");
    let partnerName = prompt("Type your partner's name ?");
    let geoLocation = prompt("Where do you live?");
    let job = prompt("what is your job?");
    return console.log("You will be a " + job + " in " + geoLocation + " and married to " + partnerName + " With " + numberOfChildren + " Kids");

   

}
Ask();