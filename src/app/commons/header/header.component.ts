import {Component, OnInit} from '@angular/core';
import {Category, CategoryService} from "../../services/category.service";
import {faUser, faBasketShopping, faHeart} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  faBasketShopping = faBasketShopping;
  faUser = faUser;
  faHeart = faHeart;
  categories: Category[];
  subcategories: Category[] | undefined = [];
  currentCategory: Category | undefined;
  search: string = '';

  constructor(private categoryService: CategoryService, private route: ActivatedRoute) {
    this.categories = categoryService.categories;
  }

  setSubCategories(category: Category) {
    this.currentCategory = category;
    this.subcategories = category.subcategories;
  }

  onInput($event: Event) {
    console.log($event)
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
