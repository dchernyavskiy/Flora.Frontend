import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {OidcSecurityService} from "angular-auth-oidc-client";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private oidcService: OidcSecurityService, private authService: AuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.oidcService.checkAuth().pipe(map(response => {
      if (!response.isAuthenticated)
        this.authService.isAuthorizedAccess$.next(false);

      return response.isAuthenticated;
    }));
  }
}
