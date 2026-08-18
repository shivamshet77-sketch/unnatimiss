function step1() {
    return new Promise(resolve => {
        resolve(10);
    });}

    step1()
    .then(num=>{
        console.log(num);
        return num*2;
    })
    .then(num=>{
        console.log(num);
        return num+5;})
    .then(num=>{
        console.log(num);});