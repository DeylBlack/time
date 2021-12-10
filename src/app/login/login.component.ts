import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'time-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin = false;

  constructor() { }

  ngOnInit(): void {
  }

  isHaveAccount(): void {
    this.isLogin = !this.isLogin;
  }

}
