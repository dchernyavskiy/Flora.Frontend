import {Component, Inject, OnInit} from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";
import {AuthService} from "./services/auth.service";
import {HttpClient, HttpHeaders, HttpResponse, HttpResponseBase} from "@angular/common/http";
import * as url from "url";
import {Observable} from "rxjs";

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
      let token = response.accessToken;
      if (token)
        localStorage.setItem('token', token);
      console.log(response)
    });
  }
}
