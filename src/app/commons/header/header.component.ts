import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {faUser, faBasketShopping, faHeart} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";
import {CategoryBriefDto} from "../../api/api";
import {BasketService} from "../../services/basket.service";


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

  constructor(private categoryService: CategoryService, private basketService: BasketService) {

  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(response => {
      this.categories = response.items;
    })
    this.basketService.basketCount$.subscribe(response => {
      this.basketCount = response;
    })
    // this.basketService.count().subscribe(res => {
    //   this.basketCount = res;
    // })
  }

  setSubCategories(category: CategoryBriefDto) {
    this.currentCategory = category;
    this.subcategories = category.children;
  }

  onInput($event: Event) {
  }

  areResultsVisible: boolean = false;

  onSearchFocus($event: FocusEvent) {
    this.areResultsVisible = true;
    document.body.style.overflow = 'hidden';
  }

  onPlanClicked($event: MouseEvent) {
    this.areResultsVisible = false;
  }

  onSearchMouseLeave($event: FocusEvent) {
    this.areResultsVisible = false;
    document.body.style.overflow = 'auto';
  }
}
