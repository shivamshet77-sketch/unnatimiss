const express =require('express');
const calculator =require('./calculator');
const string =require("./students");
const app =express();
const port=3000;


app.get('/',(req,res)=>{

res.send("CALCULATION"+"<br>"+"<br>"+
"Multiplication:\n"+calculator.multi(6,7)+"<br>"+
"Addition:"+calculator.add(4,7)+"<br>"
+"Subtraction:"+calculator.subtract(9,7)+"<br>"+
"Division:",calculator.Div(17,7));   
});

app.get("/str",(req,res)=>{
    res.send('STUDENTS DATA'
+"<br>"+"Name : "+string.getName()+"<br>"+"College : "+string.getCollege()+"<br>"+"Course : "+string.getCourse());
})

app.listen(port,()=>{
    console.log("server is running")

console.log('STUDENTS DATA'
+"\n"+"Name : "+string.getName()+"\n"+"College : "+string.getCollege()+"\n"+"Course : "+string.getCourse())
0
    
})
