const data ='{"name":"shivam", "age":20}'

const customer =JSON.parse(data)

try{
console.log("Name: ",customer.name);
console.log("Age: ",customer.age)
}catch(error){
console.log("invalid JSON");
}

