// Ex-01: Write a function in JS that takes a string and reverse 

function reversestr(str){
    var listofchar=str.split('');
    var reverse=listofchar.reverse();
    var str=reverse.join('');

    return str;

}
// console.log(reversestr("hello world"))


// ex-02 Write a javascript function that check for palindrome or not
function ispalindrome(str){

    var rev=reversestr(str)

    if(str===rev){
        return true;

    }
    else{
        return false;
    }
}

// console.log(ispalindrome("harsh"))

//Ex-03: Write a function that converts the date from number to string

function convertnumbertostring(date){
    var datestr={
        day:'',
        month:'',
        year:'',
    };

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
    day:02,
    month:02,
    year:2020
}
// console.log(convertnumbertostring(date))


// Ex-04: Write a JS function that takes a date and returns all variations of it
// Your function will return an array of strings for these date formats
// DD-MM-YYYY
// MM-DD-YYYY
// YYYY-MM-DD
// DD-MM-YY
// MM-DD-YY
// YY-MM-DD

function getallvariation(date){

    var datestr=convertnumbertostring(date);

    var ddmmyyyy=datestr.day+datestr.month+datestr.year;

    var mmddyyyy=datestr.month+datestr.day+datestr.year;

    var yyyymmdd=datestr.year+datestr.month+datestr.day;

    var ddmmyy=datestr.day+datestr.month+datestr.year.slice(-2);

    var mmddyy=datestr.month+datestr.day+datestr.year.slice(-2);

    var yymmdd=datestr.year.slice(-2)+datestr.month+datestr.day;

    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd]
}
console.log(getallvariation(date))

// Ex-05: Write a function that checks palindrome for all the date formats

function checkallpalindrome(date){
    var listofpalindrome=getallvariation(date);

    var notpaindrome=false;

    for(var i=0;i<listofpalindrome.length;i++){
        if(ispalindrome(listofpalindrome[i])){
            notpaindrome=true;
            break;

        }
    }
    return notpaindrome;

}
console.log(checkallpalindrome(date))

// Ex-06: Find the next palindrome date, also how many days are in between
function leapyear(year){

    if(year%400===0){
        return true;

    }
    if(year%100===0){
        return true;

    }
    if(year%4===0){
        return true;

    }
    return false;

}
console.log(leapyear(2021))


function getnextday(date){
    var day=date.day+1;

    // here we are finding the nextday year and month remain same here
    var month=date.month;
    var year=date.year;


    var dateinmonth=[31,28,31,30,31,30,31,31,30,31,30,31]

    if(month==2){
        // checking for febuary
        if(leapyear(year)){
            if(day>29){
                day=1;
                month++;

            }
            else{
                if(day>28){
                    day=1;
                    month++;

                }
            }
        }
    }
    // 
    else{
        // day exceeds and month increases
        if(day>dateinmonth[month-1]){
            day=1;
            month++;


        }
    }
    // if month exceeds year++
    if(month>12){
        month=1;
        year++;
        
    }
    return{
        day:day,
        month:month,
        year:year
    }



}
// console.log(nextdatedate(date))



function nextpalindromedate(date){
    var counter=0;

    var nextdate=getnextday(date)

    while(1){
        counter++;
        // we will use 
        var ispalindrome=getallvariation(nextdate);

        if(ispalindrome){
            break;
        }

        nextdate=getnextday(nextdate)


    }
    return [counter,nextdate]
}

var date={
    day:31,
    month:12,
    year:2020
}


console.log(nextpalindromedate(date))

// wiring up 

var input=document.querySelector("#input-birthday")
var submitbutton=document.querySelector("#submitbtn")
var output=document.querySelector("#outputdiv")


function eventhandler(e){
    var bdaystr=input.value;
    // console.log(bdaystr)
    if(bdaystr!==''){
        var listofcharcter=bdaystr.split('-');

        var date={
            day:Number(listofcharcter[2]),
            month:Number(listofcharcter[1]),
            year:Number(listofcharcter[0])

        }
        // console.log(date)
        var ispalindromes=checkallpalindrome(date);
        if(ispalindromes){
            output.innerText="Congrations Your Birthday is Palindrome"
        }
        else{
            var [counter,nextdate]=nextpalindromedate(date);
            output.innerText=`The Next Palindrome date is ${nextdate.day}-${nextdate.month}-${nextdate.year} and missed it by ${counter} days`
        }
        

    }

    // var date={
    //     day:Number(bdaystr[2])
    //     month:Number(bdaystr[1])
    //     year:Number(bdaystr[0])
    // }
    // console.log(date)


}


submitbutton.addEventListener("click",eventhandler)























