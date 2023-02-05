import {Component} from '@angular/core';
import {Category, CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  categories: Category[];
  subcategories: Category[] | undefined = [];

  constructor(private categoryService: CategoryService) {
    this.categories = categoryService.categories;
  }

  setSubCategories(subcategories: Category[] | undefined) {
    this.subcategories = subcategories;
  }
}
