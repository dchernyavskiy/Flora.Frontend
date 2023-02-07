import {Component} from '@angular/core';
import {faEllipsisVertical, faHeart, faMinus, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  quantity: number = 1;
  faHeart = faHeart;
  faTrash = faTrash;
  faMinus = faMinus;
  faPlus = faPlus;
  faEllipsisVertical = faEllipsisVertical;


}
