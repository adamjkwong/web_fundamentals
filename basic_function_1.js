

/*

Predict the output of the following code snippets.  Please do NOT run any of this code directly, but first predict the output using the T-diagram.  If you're not used to using the T-diagram to run through the code yet, please get comfortable now.  This will help you down the line.  Once you've predicted the output for all of the codes, then run the code one by one and compare the two.

Please turn in a text file that includes your prediction for each problem and the actual output. At the top of the file, indicate how many out of 15 you predicted correctly.

I predicted 13.5 out of 15 correctly. 2.5 incorrect. Still need to figure out how to account for return vs. console.log
*/

/*

function a(){
    return 35;
}
console.log(a())

35, CORRECT
*/

/*
function a(){
    return 4;
}
console.log(a()+a());
8, CORRECT
*/

/*
function a(b){
    return b;
}
console.log(a(2)+a(4));

6,CORRECT
*/

/*
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));

Console log 3, followed by a 9 return. Correct. 
*/

/*
function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));

 40, correct.

 */

 

 /*
 function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

4, correct. 
*/

/*
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

10, 3, then 30, CORRECT
*/


/*
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

This one tripped me up. I thought it would execute the fore loop as a(3) and a(4). Missed that the function wasn't actually being called. 
*/

/*
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

My first try, although I was doing i=i+2,  I forgot to increment the i++, so I missed it. 
*/

/*
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

Correct
//b 0 
//c 10
//i 0
//console 0 1 2 3 4 5 6 7 8 9 0 

*/

/*
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
Nothing the function is never called
*/

/*

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
Correct
//Nothing the function is never called

*/

/*
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

Correct
//10 
*/

/*
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

Correct
//15, 10 
*/

/*

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

//I guessed 15, 15.
//The answer was 15, 15, 15. Unsure if the "return" should be counted like console log or not. 
*/

//Does printing "return" and console.log output the same thing? Maybe I should have two lines for this. 






