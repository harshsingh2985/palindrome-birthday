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
    day:10,
    month:9,
    year:2020
}
console.log(convertdatetostring(date));
// Ex-04: Write a JS function that takes a date and returns all variations of it
// DD-MM-YYYY
// MM-DD-YYYY
// YYYY-MM-DD
// DD-MM-YY
// MM-DD-YY
// YY-MM-DD

function checkallvariation(date){
    var datestr=convertdatetostring(date);

    var ddmmyyyy=datestr.day+datestr.month+datestr.year;

    var mmddyyyy=datestr.month+datestr.day+datestr.year;

    var yyyymmdd=datestr.year+datestr.month+datestr.day;

    var ddmmyy=datestr.day+datestr.month+datestr.year.slice(-2);

    var mmddyy=datestr.month+datestr.day+datestr.year.slice(-2);

    var yymmdd=datestr.year.slice(-2)+datestr.month+datestr.day;

    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd]


}
console.log(checkallvariation(date))



