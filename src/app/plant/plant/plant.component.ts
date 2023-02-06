import {Component, ElementRef, TemplateRef, ViewChild} from '@angular/core';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faker} from "@faker-js/faker";


@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent {
  faker = faker;
  console = console;
  range = Array.from({length:20})
  // @ts-ignore
  @ViewChild('reviews') reviewsRef: ElementRef<HTMLElement>;
  faStar = faStar;
  quantity: number = 1;

  constructor() {

  }
}
