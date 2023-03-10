import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AddToBasketCommand, PlantBriefDto} from "../../api/api";
import {BasketService} from "../../services/basket.service";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {WishlistService} from "../../services/wishlist.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss']
})
export class PlantCardComponent {
  @Input() public plant: PlantBriefDto = {};
  @Output() public plantAddedToBasket: EventEmitter<void> = new EventEmitter<void>();
  faHeart = faHeart;
  isAddedToWishlist = false;

  constructor(private basketService: BasketService, private wishlistService: WishlistService, private authService: AuthService) {
  }

  addToBasket(plantId: string) {
    const command: AddToBasketCommand = {
      plantId: plantId,
      quantity: 1
    }
    this.basketService.addToBasket(command).subscribe(_ => {
      this.basketService.updateBasketCount();
      this.plantAddedToBasket.emit();
    });
  }

  addToWishlist(id: string) {
    this.wishlistService.add(id).subscribe({
      next: () => {
        this.isAddedToWishlist = !this.isAddedToWishlist;
        this.wishlistService.updateWishlistCount();
      },
      error: () => {
        this.authService.isAuthorizedAccess$.next(false);
      }
    })
  }
}
