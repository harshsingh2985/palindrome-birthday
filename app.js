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




