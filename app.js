// Ex-01: Write a function in JS that takes a string and reverse 

function reversestr(str){
    var listofchar=str.split('');
    var reverse=listofchar.reverse();
    var str=reverse.join('');

    return str;

}
console.log(reversestr("hello world"))


// ex-02 Write a javascript function that check for palindrome or not
function ispalindrome(str){

    var rev=reversestr(str)

    if(str===rev){
        console.log("ITS IS PALINDROME")
    }
    else{
        console.log("it is not a valid palindrome")
    }
}

console.log(ispalindrome("harsh"))

//Ex-03: Write a function that converts the date from number to string

function convertnumbertostring(date){
    var datestr={
        day:'',
        month:'',
        year:'',
    }
    // for the day 
    if(date.day<10){
        datestr.day='0'+date.day;

    }
    else{
        datestr.day=date.day.toString();

    }
    // again for the month
    if(date.month<10){
        datestr.month='0'+date.month;
    }
    else{
        datestr.month=date.month.toString();

    }
    // for the year there is simple converting into string
    datestr.year=date.year.toString();

    return datestr;
    
}
var date={
    day:5,
    month:4,
    year:2020
}
console.log(convertnumbertostring(date))







