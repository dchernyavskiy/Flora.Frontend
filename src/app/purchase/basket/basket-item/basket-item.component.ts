import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faEllipsisVertical, faHeart, faMinus, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {BasketItemDto} from "../../../api/api";
import {BasketService} from "../../../services/basket.service";

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent {
  @Input() public item: BasketItemDto = {};
  @Output() public onQuantityChanged: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onItemDeleted: EventEmitter<void> = new EventEmitter<void>();
  quantity: number = 1;
  faHeart = faHeart;
  faTrash = faTrash;
  faMinus = faMinus;
  faPlus = faPlus;
  faEllipsisVertical = faEllipsisVertical;

  constructor(private basketService: BasketService) {
  }

  changeQuantity(rise: 1 | -1) {
    this.item.quantity! += rise;
    this.onQuantityChanged.emit();
  }

  remove(id: string) {
    this.basketService.removeFromBasket({plantId: id}).subscribe(
      res => {
        this.basketService.updateBasketCount();
        this.onItemDeleted.emit();
      }
    )
  }
}
