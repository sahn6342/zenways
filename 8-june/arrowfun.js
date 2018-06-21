// function add(a,b){
//     return a+b
// }
// var newAdd=(a,b)=>{
//     return a+b
// }
// console.log(add(0101,27))
// console.log(newAdd(34,67))

// function splitString(str){
//     return str.split(" ")
// }
// var aq=splitString("shas ahnasd kfhag")
// for(let i=0;i<aq.length;i++){
//     console.log(aq[i])
// }
// var newSplitString=(str)=>{
//     return str.split(" ")
// }
// var ap=newSplitString("shas ahnasd kfhag")
// for(let i=0;i<ap.length;i++){
//     console.log(ap[i])
// }

function a(b){
    return b
}
function b(x){
    console.log("inside B")
    return x+5;
}
console.log(a(b))
