import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {faUser, faBasketShopping, faHeart} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";
import {CategoryBriefDto, SearchPlantBriefDto} from "../../api/api";
import {BasketService} from "../../services/basket.service";
import {PlantService} from "../../services/plant.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faBasketShopping = faBasketShopping;
  faUser = faUser;
  faHeart = faHeart;
  categories: CategoryBriefDto[] | undefined;
  subcategories: CategoryBriefDto[] | undefined = [];
  currentCategory: CategoryBriefDto | undefined;
  search: string = '';
  basketCount: number | undefined;
  foundItems: SearchPlantBriefDto[] = [];

  constructor(private categoryService: CategoryService, private plantService: PlantService, private basketService: BasketService) {

  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(response => {
      this.categories = response.items;
    });
    this.basketService.basketCount$.subscribe(response => {
      this.basketCount = response;
    });
  }

  setSubCategories(category: CategoryBriefDto) {
    this.currentCategory = category;
    this.subcategories = category.children;
  }

  onInput($event: Event) {
    this.plantService.search(this.search).subscribe(res =>{
      this.foundItems = res.items!;
    })
  }

  areResultsVisible: boolean = false;

  onSearchFocus($event: FocusEvent) {
    this.areResultsVisible = true;
    document.body.style.overflow = 'hidden';
  }

  onPlanClicked($event: MouseEvent) {
    this.areResultsVisible = false;
    document.body.style.overflow = 'auto';
  }

  onSearchMouseLeave($event: FocusEvent) {
    this.areResultsVisible = false;
    document.body.style.overflow = 'auto';
  }
}
