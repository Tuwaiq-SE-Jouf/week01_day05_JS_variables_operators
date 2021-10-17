function calculate_age (dob){
    var diff_ms = date.now()-
    dob.getTime();
    var age_dt = new Date (diff_ms);
    return
    Math.abs(age_dt.getUTCFullYear()-1970);
}
console.log(calculate_age(new Date(1994,7,6)));

console.log(calculate_age(new Date(2021,10,15)));

