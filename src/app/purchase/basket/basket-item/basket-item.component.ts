import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faEllipsisVertical, faHeart, faMinus, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {BasketItemDto} from "../../../api/api";
import {BasketService} from "../../../services/basket.service";
import {WishlistService} from "../../../services/wishlist.service";

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent {
  @Input() public item: BasketItemDto = {};
  @Output() public quantityChanged: EventEmitter<void> = new EventEmitter<void>();
  @Output() public itemDeleted: EventEmitter<void> = new EventEmitter<void>();
  quantity = 1;
  faHeart = faHeart;
  faTrash = faTrash;
  faMinus = faMinus;
  faPlus = faPlus;
  faEllipsisVertical = faEllipsisVertical;

  constructor(private basketService: BasketService, private wishlistService: WishlistService) {
  }

  changeQuantity(rise: 1 | -1) {
    this.item.quantity! += rise;
    this.quantityChanged.emit();
  }

  remove(id: string) {
    this.basketService.removeFromBasket({plantId: id}).subscribe(
      () => {
        this.basketService.updateBasketCount();
        this.itemDeleted.emit();
      }
    )
  }

  toWishlist(id: string) {
    this.wishlistService.add(id).subscribe(_ => {
      this.wishlistService.updateWishlistCount();
      this.remove(id);
    })
  }
}
