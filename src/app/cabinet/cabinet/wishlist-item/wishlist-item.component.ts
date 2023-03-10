import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PlantBriefDto} from "../../../api/api";
import {faShoppingBasket, faTrash} from "@fortawesome/free-solid-svg-icons";
import {BasketService} from "../../../services/basket.service";
import {WishlistService} from "../../../services/wishlist.service";

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.scss']
})
export class WishlistItemComponent {

  @Input() public item: PlantBriefDto = {};
  @Output() public delete: EventEmitter<void> = new EventEmitter<void>();
  faTrash = faTrash;
  faShoppingBasket = faShoppingBasket;

  constructor(private basketService:BasketService, private wishlistService:WishlistService) {
  }

  remove(id: string) {
    this.wishlistService.remove(id).subscribe(_ =>{
      this.wishlistService.updateWishlistCount();
      this.delete.emit();
    })
  }

  toBasket(id: string) {
    this.basketService.addToBasket({quantity:1, plantId:id}).subscribe(_ =>{
      this.basketService.updateBasketCount();
      this.remove(id);
    })
  }
}
