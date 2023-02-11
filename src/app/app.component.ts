import {Component, OnInit} from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'flora';

  constructor(private oidcService: OidcSecurityService) {
  }

  ngOnInit(): void {
    this.oidcService.checkAuth().subscribe(response => {
      let token = response.accessToken;
      if (token)
        localStorage.setItem('token', token);
      console.log(response)
    })
  }
}
