import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faEllipsisVertical, faHeart, faMinus, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {BasketItemDto} from "../../../api/api";

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent {
  @Input() public item: BasketItemDto = {};
  @Output() public onQuantityChanged: EventEmitter<void> = new EventEmitter<void>();
  quantity: number = 1;
  faHeart = faHeart;
  faTrash = faTrash;
  faMinus = faMinus;
  faPlus = faPlus;
  faEllipsisVertical = faEllipsisVertical;

  changeQuantity(rise: 1 | -1) {
    this.item.quantity! += rise;
    this.onQuantityChanged.emit();
  }
}
