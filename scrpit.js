function getName(name){
    return name;
}
let a = false;
let b = true;
console.log(a || getName("armma nasir"));

//templates

let name1 = "Goni"
let name2 = "musa"
console.log(name1 + " "+ name2, `${name1} ${name2}`);

// if statement and tanery operator
const showRecipeOne = true;
function getRecipeOneName(recipeName){
    return recipeName
}
function getRecipeTwoName(recipeName){
    return recipeName
}
if(showRecipeOne){
    console.log(getRecipeOneName("pizza"));
}else{
    console.log(getRecipeTwoName("coke"));
}
showRecipeOne ? console.log(getRecipeOneName("pizza")):
                console.log(getRecipeTwoName("coke"));

const id = 1;
const productName = "product Apple watch";
const rating = 5;
const product = {
    id, productName, rating
}
console.log(product);

const product2 = {
    description:'prodduct 2 description',
    age:"5",
    id, 
     productName,
     rating
}

const getProductTwoDescription = product2.description;
const{description} = product2;
console.log(description);
const{ age } = product2;
console.log(age);
console.log(getProductTwoDescription);

const array = ["Ali",2,3];
let getArrayFirstValue = array[0];
let getArraySecondValue = array[1];

console.log(getArrayFirstValue, getArraySecondValue);
const [getArrayFirstElement, getArraySecondElement] = array;
console.log(getArrayFirstElement,getArraySecondElement);
//default parameters spreas and rest

function mulOfTwoNumbers(number1 =2,number2=3){
    return number1*number2
}
console.log(mulOfTwoNumbers());
const  array2 = [1,2,3,4];
const  array3 = [0,9,8,7];
console.log([90,...array2,...array3,1000]);
