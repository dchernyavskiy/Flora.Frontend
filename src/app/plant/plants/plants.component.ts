import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Category, CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {
  subcategories: Category[] = [];
  hasNextPage: boolean = false;
  hasPreviousPage: boolean = false;
  totalPages: number = 3;
  products: number[] = Array.from({length: 12});
  currentCategory: Category | undefined = {};

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) {
    this.route.queryParams.subscribe(res => {
      let categoryId = res['categoryId'];
      console.log(categoryId)
      this.currentCategory = this.categoryService.findCategory(categoryId);
      console.log(this.currentCategory);
    })
  }

  ngOnInit(): void {

  }

  onChangeCurrentPage($event: number) {

  }
}
