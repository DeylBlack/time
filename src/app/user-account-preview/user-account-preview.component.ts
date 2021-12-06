import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-user-account-preview',
  templateUrl: './user-account-preview.component.html',
  styleUrls: ['./user-account-preview.component.css']
})
export class UserAccountPreviewComponent implements OnInit {

  public user: SocialUser = new SocialUser();

  ngOnInit(): void {
    if (localStorage.getItem('timeUser')) {
      this.user = JSON.parse(localStorage.getItem('timeUser') || '{}');
    }
  }

}
