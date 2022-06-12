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




