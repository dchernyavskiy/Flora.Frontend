import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, switchAll} from "rxjs";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthorizedAccess$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(@Inject(HttpClient) private http: HttpClient,) {
  }

  private baseUrl = "https://localhost:5002";

  getData(): Observable<AppUserDto | null> {
    let url_ = this.baseUrl + "/Auth/GetData";
    return this.http.get<AppUserDto>(url_, {
      withCredentials: true,
    });
  }

  putData(user: AppUserDto): Observable<boolean> {
    let url_ = this.baseUrl + "/Auth/PutData";
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
