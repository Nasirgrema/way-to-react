function myExersice(value){
    document.getElementById("demo").innerHTML = value;
}

function myFirst(){
    myExersice("Hello learning center");
}
function mySecond(){
    myExersice("What ever you are doig in live do it seiously");
}
myFirst();
mySecond();

// having control over functions
function myDisplay(some){
    document.getElementById("demo").innerHTML = some;
}
function myCalculator(num1,num2){
    let sum = num1+num2;
    return sum;
}
let result = myCalculator(3,4);
myDisplay(result);

//Or, you could call a calculator function (myCalculator),
//  and let the calculator function call the display function (myDisplayer):

function myCalculator(num1,num2){
    let sum = num1+num2;
    myDisplay(sum);
}
myCalculator(5,5);
/*The problem with the first example above, is that you have to call two functions to display the result.
The problem with the second example, is that you cannot prevent the calculator function from displaying 
the result.*/

// javaScript callbacks.
//A cllback is a function passed to another function as an argument.

function Show(it){
    document.getElementById("demo").innerHTML = it;
}

function calculator(n1,n2, callit){
    let mul = n1*n2;
    callit(mul);
}
calculator(4,4, Show);