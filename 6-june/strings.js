function con(a,b){
if((typeof a==typeof b)&&(typeof a=="string")){
	return a+b
	}
}
function spil(a,b){
	if((typeof a=="string")&&(typeof b=="string")){
		return a.split(b)
	}
}
function init(a){
for(i=0;i<a.length;i++){
	let temp=a[i]
	console.log(temp[0])
}
}

a=spil("shashank parashar jhkjhk khgkhk ddff"," ")
//console.log(con("str","2"))
console.log(a)
init(a)
