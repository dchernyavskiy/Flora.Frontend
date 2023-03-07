import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AddToBasketCommand, PlantBriefDto} from "../../api/api";
import {BasketService} from "../../services/basket.service";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {WishlistService} from "../../services/wishlist.service";

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss']
})
export class PlantCardComponent {
  @Input() public plant: PlantBriefDto = {};
  @Output() public plantAddedToBasket: EventEmitter<void> = new EventEmitter<void>();
  faHeart = faHeart;

  constructor(private basketService: BasketService, private wishlistService: WishlistService) {
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
    this.wishlistService.add(id).subscribe(_ =>{
      this.wishlistService.updateWishlistCount();
    })
  }
}
