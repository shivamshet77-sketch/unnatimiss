const fs = require("fs");

let readPromise =new Promise((resolve,reject)=>{
    fs.readFile("file_io.txt","utf8",(err,data)=>{
        if(err)
            reject(err)
        else
            resolve(data)
    });})

    readPromise.then(data=>{console.log(data)})
    .catch(err=>{console.log(err);
    })
