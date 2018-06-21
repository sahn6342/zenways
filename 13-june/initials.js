const sahn=require("os")

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

a=spil(process.argv[2])
console.log(a)
//init(a)
