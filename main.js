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
const [getArrayFirstElement, getArraySecondElement, get] = array;
console.log(getArrayFirstElement,getArraySecondElement, get);
//default parameters spreas and rest

function mulOfTwoNumbers(number1 =2,number2=3){
    return number1*number2
}
console.log(mulOfTwoNumbers(4));
const  array2 = [1,2,3,4];
const  array3 = [0,9,8,7,4];
console.log([90,...array2,...array3,1000]);

function getInfo(a,b,...c){
console.log(a,b,c);
//
    return "sangam mukherjee";
}
console.log(getInfo(1,2,3,4,5,6,7,8,9,10));

//map,find, filter, some, every, includes, indexOf, findInex

// 1. map array method
const personArray = [
    {name:"tanko",
        age:45,
        country: "Nigeria"   
       },
    {name:"ali",
     age:23,
     country: "Nigeria"   
    },
    {name:"musa",
    age:27,
    country: "Niger"   
    },
    {name:"zaidu",
    age:23,
    country: "Makkah"   
    }
];
let getAllNames = personArray.map((singlePerson, index)=>{
    console.log(singlePerson, index);
    return( singlePerson.name,
        `${singlePerson.name} age is ${singlePerson.age} contry is ${singlePerson.country}`
    )
});
console.log(getAllNames);
// 2. find array method
let getPersonFromNigeria = personArray.find((singlePerson,index)=>{
    return singlePerson.country === "Nigeria";
});
console.log(getPersonFromNigeria);
// 3. filter array method
let getAllPersonFromNigeria = personArray.filter((singlePerson, index)=>{
    return singlePerson.country === "Nigeria";
});
console.log(getAllPersonFromNigeria);
// 4. some array method
let checkSomeArrayMethodWithExample = personArray.some((singlePerson,index)=>{
    return singlePerson.age > 40
});
console.log(checkSomeArrayMethodWithExample);

// 5. every Array method
let checkEveryArrayMethodWithExample = personArray.every((singlePerson,index)=>{
    return singlePerson.age > 40;
});
console.log(checkEveryArrayMethodWithExample);

// 6. includes and indexOf array method
let fruitsArray = ['Apple', 'banana', 'Orange'];
console.log(fruitsArray.includes('Apple'));
console.log(fruitsArray.includes('aramma'), fruitsArray.indexOf('banana'));
let getIndexOfPersonWhoIsFromNigerria = personArray.findIndex((singlePerson)=>{
    return singlePerson.country === 'Nigeria';
});
console.log(getIndexOfPersonWhoIsFromNigerria);

// Application programming interface API
let getListOfProductsElement = document.querySelector(".list-of-products");
function renderProducts(getProducts){
    getListOfProductsElement.innerHTML = getProducts
    .map((singleProductItem)=>`<p>${singleProductItem.title} </p>`).join("");
}
async function fetchProductList() {
    try{
      const apiResponse = await fetch("https://dummyjson.com/products",{method : 'GET',});
      const result = await apiResponse.json();
      console.log(result);
      if(result?.products?.length >0) renderProducts(result?.products);
    }catch(e){
        console.log(e);
    }
}
fetchProductList();