// const fs = require("fs");
// const { resolve } = require("dns")


// function writeFile(){new Promise((resolve,reject)=>{
//     return fs.writeFileSync("Notice.txt","College will remain close Tomorrow is Holiday",(err)=>{
//         if(err){
//             reject(err);
//         }else{
//             resolve();
//         }
//     })
// })}

// function readFile(){new Promise((resolve,reject)=>{
//     return fs.readFileSync("Notice.txt","utf8",(err)=>{
//         if(err){
//             reject(err)

//         }else{
//             resolve();
//         }
//     })
// })}

// function appendFile(){new Promise((resolve,reject)=>{
//     return fs.appendFile("Notice.txt","\n 12/08/2026 football selection.",(err)=>{
//         if(err){
//             reject()
//         }else{
//             resolve();
//         }
//     })
// })}
// console.log("NOTICE");

// writeFile()
// .then(()=>{console.log("NOTICE")
// return readFile();
// })


const fs = require("fs")

try{
    // const notice="Tomorrow is holiday\n";
    // fs.writeFileSync("notice.txt",notice);
    // console.log("Notice Stored Successfully.");

    fs.appendFileSync("notice.txt","14/08/2026 Ganesh Chaturthi Holiday.\n")

    const read = fs.readFileSync("notice.txt","utf8")
    console.log("Latest Notice");
    console.log(read);
    
    
    

}catch{

    console.log(error.message);
    

}

    