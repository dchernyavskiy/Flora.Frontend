import {Component} from '@angular/core';
import {faHeart, faTableList, faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent {
  faUser = faUser;
  faTableList = faTableList;
  faHeart = faHeart;
}
