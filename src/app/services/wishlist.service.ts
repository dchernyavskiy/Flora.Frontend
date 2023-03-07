import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {map, Observable, Subject} from "rxjs";
import {Client, PlantBriefDto} from "../api/api";
import {OidcSecurityService} from "angular-auth-oidc-client";

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class WishlistService extends BaseService {

  constructor(private override client: Client, private oidcService: OidcSecurityService) {
    super(client);
    this.setWishlistCount();
  }

  private wishlistCount = new Subject<number>();
  public wishlistCount$ = this.wishlistCount.asObservable();

  private setWishlistCount() {
    this.oidcService.checkAuth().subscribe(res => {
      if (res.isAuthenticated) {
        this.client.getWishlistCount({}, this.apiVersion).subscribe(response => {
          this.wishlistCount.next(response.count as number);
        })
      } else {
        this.wishlistCount.next(0)
      }
    })
  }

  updateWishlistCount() {
    this.setWishlistCount();
  }

  get(): Observable<PlantBriefDto[]> {
    return this.client.get5({}, this.apiVersion).pipe(map(response => response.plants as PlantBriefDto[]));
  }

  add(plantId: string): Observable<boolean> {
    return this.client.addToWishlist(this.apiVersion, {plantId: plantId});
  }

  remove(plantId: string): Observable<void> {
    return this.client.removeFromWishlist(this.apiVersion, {plantId: plantId});
  }
}
