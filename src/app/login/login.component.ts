import { Component, OnInit } from '@angular/core';
import {
  GoogleLoginProvider,
  SocialAuthService,
} from 'angularx-social-login';
import {Router} from '@angular/router';

@Component({
  selector: 'time-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin = false;

  constructor(
    private authService: SocialAuthService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      localStorage.setItem('timeUser', JSON.stringify(user));

      this.router.navigate(['/get-start']).then(() => {
        window.location.reload();
      });
    });
  }

  isHaveAccount(): void {
    this.isLogin = !this.isLogin;
  }

}
