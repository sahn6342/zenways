i=0
function func(){
console.log('iamfunc'+i)
	if(i<10){
		func()
	}
i=i+1
}
func()
