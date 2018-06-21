var event=require("events");
var eventEmitter=new event.EventEmitter();
var counter=0,counter1=0;
var ringBell=function ringBell(){
console.log("function 1");
counter=counter+1;
}
var ringBellNew=function ringBell(){
console.log("function 2");
counter1=counter1+1;
}

eventEmitter.on('doorOpen',ringBell);//listen event doorOpen call ringBell
//eventEmitter.on('doorOpen',ringBellNew);//listen event doorOpen call rngBellNew
eventEmitter.on('doorOpen2',ringBellNew);//listen event doorOpen2 call ringBellNew
eventEmitter.emit('doorOpen');//emit the event doorOpen
eventEmitter.emit('doorOpen');
eventEmitter.emit('doorOpen');
eventEmitter.emit('doorOpen2');//emit the event doorOpen2
eventEmitter.emit('doorOpen2');
eventEmitter.emit('doorOpen2');
eventEmitter.emit('doorOpen2');
console.log(counter);
console.log(counter1);
