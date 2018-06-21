var event=require("events");
var eventEmitt=new event.EventEmitter();
console.log(eventEmitt);
var onLed1=()=>{
console.log("led 1 on");
}
var offLed1=()=>{
console.log("led 1 off");
}
var onLed2=(a,b)=>{
console.log("led 2 on",a,b);
}
var offLed2=(a,b)=>{
console.log("led 2 off",a,b);
}
eventEmitt.on('on1',onLed1);
eventEmitt.on('off1',offLed1);
eventEmitt.on('on2',onLed2);
eventEmitt.on('off2',offLed2);

eventEmitt.emit('on1');
eventEmitt.emit('off1');
eventEmitt.emit('on2','sahn',53);
eventEmitt.emit('off2','merlin','rahul');


