import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {faUser, faBasketShopping, faHeart} from "@fortawesome/free-solid-svg-icons";
import {CategoryBriefDto, SearchPlantBriefDto} from "../../api/api";
import {BasketService} from "../../services/basket.service";
import {PlantService} from "../../services/plant.service";
import {WishlistService} from "../../services/wishlist.service";


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
  search = '';
  basketCount: number | undefined;
  foundItems: SearchPlantBriefDto[] = [];
  wishlistCount: number | undefined;

  constructor(private categoryService: CategoryService, private plantService: PlantService, private basketService: BasketService, private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(response => {
      this.categories = response.items;
    });
    this.basketService.basketCount$.subscribe(response => {
      this.basketCount = response;
    });
    this.wishlistService.wishlistCount$.subscribe(response =>{
      this.wishlistCount = response;
    })
  }

  setSubCategories(category: CategoryBriefDto) {
    this.currentCategory = category;
    this.subcategories = category.children;
  }

  onInput() {
    this.plantService.search(this.search).subscribe(res => {
      this.foundItems = res.items!;
    })
  }

  areResultsVisible = false;

  onSearchFocus() {
    this.areResultsVisible = true;
    document.body.style.overflow = 'hidden';
  }

  onPlanClicked() {
    this.areResultsVisible = false;
    document.body.style.overflow = 'auto';
  }

  onSearchMouseLeave() {
    this.areResultsVisible = false;
    document.body.style.overflow = 'auto';
  }
}
