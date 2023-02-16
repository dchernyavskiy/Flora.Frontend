import {Component} from '@angular/core';
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";
import {PlantService} from "../../services/plant.service";
import {PlantDto, ReviewDto} from "../../api/api";


@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent {
  faPlus = faPlus;
  faMinus = faMinus;

  quantity: number = 1;
  plant: PlantDto = {};
  reviewCount: number = 0;

  constructor(private route: ActivatedRoute, private plantService: PlantService) {
    this.route.paramMap.subscribe(res => {
      let plantId = res.get('id');
      this.plantService.get(plantId!).subscribe(res => {
        this.plant = res;
        this.reviewCount = this.reviewsCount(res.reviews!) - 1;
      });
    })
  }

  reviewsCount(reviews: ReviewDto[]): number {
    let count = 1;
    for (const child of reviews) {
      count += this.reviewsCount(child.children!);
    }
    return count;
  }
}
