import {Component, OnInit} from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'flora';

  constructor(protected oidcService: OidcSecurityService, protected authService: AuthService) {
  }

  ngOnInit(): void {
    this.oidcService.checkAuth().subscribe(response => {
      const token = response.accessToken;
      if (token)
        localStorage.setItem('token', token);
      console.log(response)
    });
  }
}
