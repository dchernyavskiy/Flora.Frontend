import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {faUser, faBasketShopping, faHeart} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";
import {CategoryBriefDto} from "../../api/api";


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

  constructor(private categoryService: CategoryService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(response =>{
      this.categories = response.items;
    })
  }

  setSubCategories(category: CategoryBriefDto) {
    this.currentCategory = category;
    this.subcategories = category.children;
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
