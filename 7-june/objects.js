function laptop(name,ram,color){
    this.name=name
    this.ram=ram
    this.color=color
    this.screen=15.6
    //getter and setter
    this.getName=function(){
        return this.name
    }
    this.getRam=function(){
        return this.ram
    }
    this.setName=function(name){
        this.name=name
    }
}
var mak=new laptop('hp',4,'red')
console.log(mak)
console.log(mak.name)
mak.keyb="island"
console.log(mak)
mak.setName("sahn")
console.log(mak.getName())
delete mak.keyb
console.log(Object.keys(mak))