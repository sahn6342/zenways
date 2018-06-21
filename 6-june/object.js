var phone = new Object()
phone.name="xiomi"
phone.camera="13MP"
phone.type="volte"
console.log(phone)
for(i in phone){
    console.log(i+' -> '+phone[i])
}
console.log(Object.keys(phone))
console.log(Object.getOwnPropertyNames(phone))
var laptop={name:"dell",price:"thirty K",ram:4}
for(i in laptop){
    console.log(i+' -> '+laptop[i])
}