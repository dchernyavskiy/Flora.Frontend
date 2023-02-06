import {Component} from '@angular/core';
import {Category, CategoryService} from "../../services/category.service";
import {faUser, faBasketShopping} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faBasketShopping = faBasketShopping;
  faUser = faUser;
  categories: Category[];
  subcategories: Category[] | undefined = [];
  currentCategory: Category | undefined;
  search: string = '';

  constructor(private categoryService: CategoryService) {
    this.categories = categoryService.categories;
  }

  setSubCategories(category: Category) {
    this.currentCategory = category;
    this.subcategories = category.subcategories;
  }

  onInput($event: Event) {
    console.log($event)
  }
}
