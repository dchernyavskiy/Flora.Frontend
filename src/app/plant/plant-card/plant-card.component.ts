import {Component, Input} from '@angular/core';
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {PlantBriefDto} from "../../api/api";

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss']
})
export class PlantCardComponent {
  @Input() public plant: PlantBriefDto = {};
  faCheck = faCheck;

}
