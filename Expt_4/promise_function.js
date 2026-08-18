const { resolve } = require("dns");
const fs = require("fs");

function writefilepromise(){
    return new Promise((resolve, reject)=>{
        fs.writeFile("demo.txt","hello students, im shivam shet.",(err)=>{
            if(err)
                reject(err);
            else
                resolve();
        })
    })
}

function readfilepromise(){
    return new Promise((resolve, reject)=>{
        fs.readFile("demo.txt","utf8",(err,data)=>{
            if(err)
                reject(err);
            else
                resolve(data);
        })
    })
}

writefilepromise()
.then(()=>{
    console.log("File witten");
    return readfilepromise(); 
})

.then((data)=>{console.log(data);})
.then((err)=>{console.log(err);})