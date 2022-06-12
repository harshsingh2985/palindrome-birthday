// Ex-01: Write a function in JS that takes a string and reverses it
function reversestr(str){
    var listofchar=str.split('');
    var reverse=listofchar.reverse();
    var rejoin=reverse.join('');

    return rejoin;

}
console.log(reversestr("Hello"))