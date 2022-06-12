// Ex-01: Write a function in JS that takes a string and reverses it
function reversestr(str){
    var listofchar=str.split('');
    var reverse=listofchar.reverse();
    var rejoin=reverse.join('');

    return rejoin;

}
console.log(reversestr("Hello"))

// Ex-02: Write a JS function to check for palindrome
function ispalindrome(str){

    var rev=reversestr(str);

    if(str===rev){
        return true;

    }
    else{
        return false;

    }
}
console.log(ispalindrome("civic"))

// Ex-03: Write a function that converts the date from number to string

function convertdatetostring(date){
    var datestr={
        day:'',
        month:'',
        year:''

    }

    if(date.day<10){
        datestr.day='0'+date.day;

    }
    else{
        datestr.day=date.day.toString();
    }
    // similiar for the month
    if(date.month<10){
        datestr.month='0'+date.month;
    }
    else{
        datestr.month=date.month.toString();
    }

    // for year it will remain same
    datestr.year=date.year.toString();

    // now we have to return the datestr
    return datestr;
    
}

var date={
    day:4,
    month:5,
    year:2020
}
console.log(convertdatetostring(date));



