import {Component} from '@angular/core';
import {faHeart, faTableList, faUser} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute, RouterLinkActive} from "@angular/router";

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
  user = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  }

  constructor(private router: ActivatedRoute) {
    this.router.data.subscribe(res => {
      this.tabs.wishlist = res['wishlist'];
      this.tabs.personalData = res['personalData'];
      this.tabs.orders = res['orders'];
    });
  }
}
