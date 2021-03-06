// Ex-01: Write a function in JS that takes a string and reverses it
function reversestr(str){
    var listofchar=str.split('');
    var reverse=listofchar.reverse();
    var rejoin=reverse.join('');

    return rejoin;

}
// console.log(reversestr("Hello"))

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
// console.log(ispalindrome("civic"))

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
// Input: { day: 5, month: 1, year: 2020 }
var date={
    day:5,
    month:1,
    year:2020
}
// console.log(convertdatetostring(date));
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
// console.log(checkallvariation(date))

// Ex-05: Write a function that checks palindrome for all the date formats
function checkpalindromeforallvariation(date){

    var listofall=checkallvariation(date);

    var bool=false;

    for(var i=0;i<listofall.length;i++){
        if(ispalindrome(listofall[i])){
            bool=true;
            break;
        }
       
    }

    return bool;

}
// console.log(checkpalindromeforallvariation(date))
// Ex-06: Find the next palindrome date, also how many days are in between

function isleapyear(year){
    if(year%400===0){
        return true;

    }
    if(year%100==0){
        return true;

    }
    if(year%4===0){
        return true;

    }
    return false;

}
// console.log(isleapyear(2021))
function getnextdate(date){
      // for the nextdate fucntion we will increment the date function
      var day=date.day+1;

      // we will not do for this for month and year for different reason;
      var month=date.month;
      var year=date.year;
  
      var daysinmonth=[31,28,31,30,31,30,31,31,30,31,30,31]
  
      // it for febuary
      if(month==2){
          // checking for leap year;
          if(isleapyear(year)){
              if(day>29){
                  day=1;
                  month++;
  
              }
              // if the day is not leap year:
              else{
                  if(day>28){
                      day=1;
                      month++;
  
                  }
              }
          }
      }
  
      // for all month exepct febuary 
  
      else{
          // dates exceed after the lastdateofmonth then month increases
          if(day>daysinmonth[month - 1]){
              day=1;
              month++;
          }
      }
      // for suppose the day is 31 so we should increase the month
      if(month>12){
          month=1;
          year++;
  
      }
      return {
          day:day,
          month:month,
          year:year
      }
  
      
  }
//   console.log(getnextdate(date2));

var date2={
    day:31,
    month:05,
    year:2022
}
console.log(getnextdate(date2));


function nextpalindromedate(date){
    var ctr=0;
    var nextdate=getnextdate(date);

    while(1){
        ctr++;
        // now we will use ex-05 function to checkthepalindrome
        var ispalindrome=checkpalindromeforallvariation(nextdate);

        if(ispalindrome){
            break;
        }
        // now will search again to get the valid palindrome
        nextdate=getnextdate(nextdate);
    }

    return [ctr,nextdate];
    
}
var date10={
    day:29,
    month:05,
    year:2022
}
console.log(nextpalindromedate(date10))

// ex-07 wiring up all this 
var input=document.querySelector("#input-birthday");
var button=document.querySelector("#submitbtn");
var output=document.querySelector("#outputdiv");

function eventhandler(e){
    var birthday=input.value;
    // console.log(birthday)

    if(birthday!==''){
        var listofbirthday=birthday.split('-')
        // console.log(listofbirthday)

        var date={
            day:Number(listofbirthday[2]),
            month:Number(listofbirthday[1]),
            year:Number(listofbirthday[0])
        }
        // console.log(date)

        var ispalindrome=checkpalindromeforallvariation(date);

        if(ispalindrome){
            output.innerText="Congrulations Your Birthday is Palindrome"
        }
        else{
            var [ctr,nextdate]=nextpalindromedate(date);
            output.innerText=`The Next Palindrome Date is ${nextdate.day}-${nextdate.month}-${nextdate.year} And You Missed it by ${ctr} Days`
        }


    }

}

button.addEventListener("click",eventhandler)









