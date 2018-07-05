import { Component } from "@angular/core";

@Component({
    templateUrl:'./login.html',
    styleUrls:["../../assets/bootstrap/bootstrap.css","./newCss.css"]
})

export class login{

    comp(e){
        if(sessionStorage.getItem('username')==e.username){
          if(sessionStorage.getItem('password')==e.password){
            console.log("matched");
                
          }else{
            console.log("password incorrect")
          }
    
        }else{
          console.log("username invalid")
        }
        
      }
} 