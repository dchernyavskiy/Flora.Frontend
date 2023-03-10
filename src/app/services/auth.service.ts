import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {OidcSecurityService} from "angular-auth-oidc-client";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthorizedAccess$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(@Inject(HttpClient) private http: HttpClient,private oidcService: OidcSecurityService) {
  }

  private baseUrl = "https://localhost:5002";


  isAuthenticated():Observable<boolean>{
    return  this.oidcService.isAuthenticated()
  }

  getData(): Observable<AppUserDto | null> {
    const url_ = this.baseUrl + "/Auth/GetData";
    return this.http.get<AppUserDto>(url_, {
      withCredentials: true,
    });
  }

  putData(user: AppUserDto): Observable<boolean> {
    const url_ = this.baseUrl + "/Auth/PutData";
    return  this.http.put<boolean>(url_, user, {
      withCredentials: true,
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      }),
    });
  }
}

export interface AppUserDto {
  firstName?: string,
  lastName?: string,
  phoneNumber?: string,
  email?: string
}
