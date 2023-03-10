import {Component} from '@angular/core';
import {faHeart, faTableList, faUser} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";
import {OidcSecurityService} from "angular-auth-oidc-client";
import {AppUserDto, AuthService} from "../../services/auth.service";
import {WishlistService} from "../../services/wishlist.service";
import {PlantBriefDto} from "../../api/api";

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent {
  faUser = faUser;
  faTableList = faTableList;
  faHeart = faHeart;
  tabs = {
    personalData: false,
    wishlist: false,
    orders: false,
  }
  user: AppUserDto = {};
  wishlist: PlantBriefDto[] = [];

  constructor(private router: ActivatedRoute, private oidsService: OidcSecurityService, private authService: AuthService, private wishListService: WishlistService) {
    this.router.data.subscribe(res => {
      this.tabs.wishlist = res['wishlist'];
      this.tabs.personalData = res['personalData'];
      this.tabs.orders = res['orders'];
    });
    this.authService.getData().subscribe(response => {
      this.user = response as AppUserDto;
    })
    this.getWishList();
  }

  logoff() {
    this.oidsService.logoff().subscribe(res => {
      console.log(res)
    })
  }

  save() {
    this.authService.putData(this.user).subscribe(res => {
      console.log(res)
    })
  }

  getWishList() {
    this.wishListService.get().subscribe(res => {
      console.log(res)
      this.wishlist = res;
    });
  }
}
