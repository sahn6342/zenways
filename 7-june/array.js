var arr=["sahn",45,"rahul","",33,{name:"shaktimaan"}]
console.log(arr)
console.log(arr[5])
arr[3]="pagal"
console.log(arr)
console.log(arr.length)
arr["class"]="sahn"
console.log(arr["class"])
console.log(arr.length)
console.log(arr[6])
arr.forEach(function(item,index,array){
    console.log(item+"---"+index)
})