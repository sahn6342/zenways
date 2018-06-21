var obj={
    a=3,
    get inc(){
        return this.a
    },
    set a(x){
        this.a=x
    } 
}
console.log(obj.inc())
console.log(obj.a(5))
console.log(obj.inc())