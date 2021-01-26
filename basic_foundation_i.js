/*
get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
*/
var arrayterm = [];
for (i = 0; i <255; i++){
    arrayterm.push(i);
}
console.log(arrayterm);

/*
Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
*/

var sum = 0;
function sumupeven(){
    for (i = 0; i <=1000; i++){
        if ((i % 2) == 0){
        sum=sum+i;
        }
        else{
        continue
        }
    }
        return sum;
}
sumupeven();


/*
Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
*/

var sum = 0;
function sumupodd(){
    for (i = 0; i <=5000; i++){
        if ((i % 2) != 0){
        sum=sum+i;
        }
        else{
        continue
        }
    }
        return sum;
}
sumupodd();

/*
Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
*/

var theArray=[-5,2,5,12];
var sum = 0;
function sumArray(){
    for (i=0; i<theArray.length; i++){
    sum = sum + theArray[i];
    }
console.log(sum);
}
sumArray();

/*
Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
*/

var theArray=[-3,3,5,7] ;
var max = theArray[0];
function max_array(){
    for (i=0; i<theArray.length; i++){
        if (max < theArray[i]){
        max = theArray[i];
        }
    }
console.log(max);
}
max_array();

/*
Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
*/

var theArray=[1,3,5,7,20]  ;
var avg = 0;
function avg_array(){
    for (i=0; i<theArray.length; i++){
        avg = avg + theArray[i];
        //This avg, line 9 is actually "total", but I was attempting to use less variables
        }
    avg = avg/(theArray.length);
    console.log(avg);
    }

avg_array();

/*
Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
*/

the_array=[];
function odd_array(){
    for (i=0; i<=50; i++){
        if((i%2)!=0){
        the_array.push(i);
        }
    }
console.log(the_array);
}

odd_array();

/*
Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
*/

y = 3; 
arr = [1, 3, 5, 7];
tot = 0;
function biggy_y(){
    for (i = 0; i<=arr.length; i++){
        if (arr[i]>y){
            tot++;
    }
}
console.log(tot);
}

biggy_y();

/*
Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
*/

arr = [1,5,10,-2];
function square_it_up(){
    for (i=0; i<arr.length; i++){
        arr[i]=(arr[i]**2);
    }
    console.log(arr);
    return arr;
}
square_it_up();

/*
Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
*/

arr = [1,5,10,-2];
function turn_it_positive_or_zero(){
    for (i=0;i<arr.length;i++){
        if (arr[i]<0){
        arr[i]=0;
        }
    }
console.log(arr);
}

turn_it_positive_or_zero();

/*
Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
*/

var arr = [1,5,10,-2];
var max_min_avg_arr = [];
var max = 0;
var min = 0;
var avg = 0;

function maxminavg(){
    for (i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
        avg = avg + arr[i];
    }
    avg = avg/(arr.length);
    max_min_avg_arr.push(max);
    max_min_avg_arr.push(min);  
    max_min_avg_arr.push(avg);
    console.log(max_min_avg_arr);
}
maxminavg();

/*
Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
*/