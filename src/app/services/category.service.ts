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

  generateCategory(req: boolean): Category{
    return {
      name: faker.name.firstName(),
      subcategories: req ? Array.from({length: this.randomIntFromInterval(4, 15)}).map(x => this.generateCategory(false)) : [],
    }
  }

  constructor() {
    this.categories = Array.from({length:15}).map(x => this.generateCategory(true));
    console.log(this.categories)
  }

  ngOnInit(): void {
  }
}

export interface Category {
  name: string;
  subcategories?: Category[];
}
