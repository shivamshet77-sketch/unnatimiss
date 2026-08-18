const fs= require("fs")


let promise =new Promise((resolve,reject)=>{

    let success = true
    if(success)
    resolve("promise complete successfully");
    else
        reject("promise failed");});

promise.then(result => console.log(result)).catch(error =>console.log(error));
