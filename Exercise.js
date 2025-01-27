async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("AllHU AKBAR");
        },3000);
  
        });
        document.getElementById("demo").innerHTML = await myPromise;
    };
    
myDisplay();