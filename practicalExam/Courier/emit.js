const EventEmitter = require("events")

const courier = new EventEmitter();

courier.on("locationReached",(stage)=>{
    console.log("Updating Location......");
    console.log("Your parcel has reached",(stage));   
})

courier.emit("locationReached",("Volvoi"));