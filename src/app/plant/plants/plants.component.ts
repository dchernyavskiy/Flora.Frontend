import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Category, CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit{
  categoryId: string = '';
  subcategories: Category[] = [];
  hasNextPage: boolean = false;
  hasPreviousPage: boolean = false;
  totalPages: number = 3;
  constructor(private route: ActivatedRoute, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(res =>{
      this.categoryId = res['categoryId'];
      let subCategoryId = res['subCategoryId'];
      if(!subCategoryId){

        // @ts-ignore
        this.subcategories = this.categoryService.categories.find(x => x.id == this.categoryId)?.subcategories;
        console.log(this.subcategories)
      }
      console.log(this.categoryId)
      console.log(subCategoryId)
    })
  }

  onChangeCurrentPage($event: number) {

  }
}
