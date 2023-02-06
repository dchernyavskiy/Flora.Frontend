import {Component} from '@angular/core';
import {faCheck} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss']
})
export class PlantCardComponent {
  faCheck = faCheck;
  product = {id: '1'};
}
