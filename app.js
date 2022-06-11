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

    var stre=reversestr(str);

    if(stre===reversestr){
        return true;

    }
    else{
        return false;

    }
}

console.log(ispalindrome("civic"))





