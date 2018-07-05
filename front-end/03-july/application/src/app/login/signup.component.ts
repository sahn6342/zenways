import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css',"../../assets/bootstrap/bootstrap.css"]
})
export class SignupComponent implements OnInit {

  constructor() { }
  submit(temp){
    sessionStorage.setItem('username',temp.username)
    sessionStorage.setItem('password',temp.password)
  }


  ngOnInit() {
  }

}
