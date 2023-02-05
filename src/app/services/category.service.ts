import {Injectable, OnInit} from '@angular/core';
import {faker} from "@faker-js/faker";


@Injectable({
  providedIn: 'root'
})
export class CategoryService implements OnInit {

  public categories: Category[] = [];

  randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  _id: number = 1;

  generateCategory(req: boolean): Category {
    return {
      id: (++this._id).toString(),
      name: faker.name.firstName(),
      subcategories: req ? Array.from({length: this.randomIntFromInterval(4, 15)}).map(x => this.generateCategory(false)) : [],
    }
  }

  findCategory(id: string): Category | undefined {
    return this.findCategoryReq(this.categories, id);
  }

  findCategoryReq(categories: Category[], id: string): Category | undefined {
    for (let category of categories) {
      if (category.id === id) return category;
    }
    for (let category of categories) {
      if (category.subcategories) {
        let result = this.findCategoryReq(category.subcategories, id);
        if (result) return result;
      }
    }
    return undefined;
  }

  constructor() {
    if (this.categories.length == 0) {
      this.categories = Array.from({length: 15}).map(x => this.generateCategory(true));
    }
    console.log(this.categories)
  }

  ngOnInit(): void {
  }
}

export interface Category {
  id?: string;
  name?: string;
  subcategories?: Category[];
}
