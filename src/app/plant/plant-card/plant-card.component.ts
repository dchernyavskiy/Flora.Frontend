import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {AddToBasketCommand, PlantBriefDto} from "../../api/api";
import {BasketService} from "../../services/basket.service";

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss']
})
export class PlantCardComponent {
  @Input() public plant: PlantBriefDto = {};
  @Output() public onPlantAddedToBasket: EventEmitter<void> = new EventEmitter<void>();
  faCheck = faCheck;

  constructor(private basketService: BasketService) {
  }

  addToBasket(plantId:string) {
    let command: AddToBasketCommand = {
      plantId: plantId,
      quantity: 1
    }
    this.basketService.addToBasket(command).subscribe(response => {
      this.basketService.updateBasketCount();
      this.onPlantAddedToBasket.emit();
    });
  }
}
