import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";
import {CategoryDto, PlantBriefDto, OrderBy} from "../../api/api";
import {PlantService} from "../../services/plant.service";
import {faArrowDownWideShort, faArrowUpWideShort} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {
  iconGroup = {
    orderBy: 3 as OrderBy,
    isAsc: true,
    ascIcon: faArrowUpWideShort,
    descIcon: faArrowDownWideShort
  };
  hasNextPage: boolean | undefined = false;
  hasPreviousPage: boolean | undefined = false;
  totalPages: number | undefined = 0;
  currentCategory: CategoryDto | undefined = {};
  pageSize: number = 12;
  items: PlantBriefDto[] | undefined;
  pageNumber: number | undefined = 1;
  totalCount: number | undefined;

  constructor(private route: ActivatedRoute, private router: Router,  private categoryService: CategoryService, private plantService: PlantService) {
    this.router.events.subscribe(res =>{
      this.pageNumber = 1;
      this.route.queryParams.subscribe(res => {
        let categoryId = res['categoryId'];
        this.categoryService.get(categoryId).subscribe(response => {
          this.currentCategory = response;
          this.getPlants();
          console.log(response)
        })
      });
    });
  }

  getPlants() {
    this.plantService.getAll(this.currentCategory?.id!, this.pageNumber!, this.pageSize, this.iconGroup.orderBy, this.iconGroup.isAsc).subscribe(response => {
      this.items = response.items;
      this.hasNextPage = response.hasNextPage;
      this.hasPreviousPage = response.hasPreviousPage;
      this.totalPages = response.totalPages;
      this.pageNumber = response.pageNumber;
      this.totalCount = response.totalCount;

      console.log(response)
    });
  }

  ngOnInit(): void {

  }

  onChangeCurrentPage($event: number) {
    this.pageNumber = $event;
    this.getPlants();
  }
}
