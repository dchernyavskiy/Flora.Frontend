import {Component} from '@angular/core';
import {faMinus, faPlus, faStar} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";
import {PlantService} from "../../services/plant.service";
import {AddToBasketCommand, CreateReviewCommand, PlantDto, ReviewDto} from "../../api/api";
import {BasketService} from "../../services/basket.service";
import {BehaviorSubject, map} from "rxjs";
import {ReviewService} from "../../services/review.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent {
  faPlus = faPlus;
  faMinus = faMinus;
  faStar = faStar;
  plant: PlantDto = {};
  reviewCount = 0;
  review: CreateReviewCommand = {};

  rate = new BehaviorSubject<number>(0);
  stars = this.rate.asObservable().pipe(map(x => Array(5).fill(0).map((_, i) => ({
    index: i + 1,
    isYellow: i < x,
  }))));

  addToBasketCommand: AddToBasketCommand = {
    quantity: 1
  };
  isModalHidden = true;
  isStarHidden = true;
  modalHidden$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private route: ActivatedRoute,
              private plantService: PlantService,
              private reviewService: ReviewService,
              private basketService: BasketService,
              private authService:AuthService) {
    this.getPlant();
    this.authService.isAuthenticated().subscribe(res=>{
      if(res){
        this.authService.getData().subscribe(res =>{
          if(res){
            this.review.fullName = res.firstName + ' ' + res.lastName;
            this.review.email = res.email;
          }
        })
      }
    })
  }

  reviewsCount(reviews: ReviewDto[]): number {
    let count = 1;
    for (const child of reviews) {
      count += this.reviewsCount(child.children!);
    }
    return count;
  }

  addToBasket() {
    this.addToBasketCommand.plantId = this.plant.id;
    this.basketService.addToBasket(this.addToBasketCommand).subscribe(response => {
      this.basketService.updateBasketCount();
    });
  }

  onSend() {

    this.review.rate = this.rate.value;
    this.reviewService.send(this.review).subscribe(res => {
      this.getPlant();
      this.modalHidden$.next(true);
    })
  }

  reply(parentId: string | null = null) {
    this.isModalHidden = false;
    if (parentId) {
      this.review.parentId = parentId as string;
      this.isStarHidden = false;
    }else{
      this.review.plantId = this.plant.id;
    }
    this.modalHidden$.next(false);
  }

  private getPlant() {
    this.route.paramMap.subscribe(res => {
      const plantId = res.get('id');
      this.plantService.get(plantId!).subscribe(res => {
        this.plant = res;
        this.reviewCount = this.reviewsCount(res.reviews!) - 1;
      });
    });
  }
}
