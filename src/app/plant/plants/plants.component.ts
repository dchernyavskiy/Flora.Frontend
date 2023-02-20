import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";
import {CategoryDto, PlantBriefDto, OrderBy} from "../../api/api";
import {PlantService} from "../../services/plant.service";
import {faArrowDownWideShort, faArrowUpWideShort} from "@fortawesome/free-solid-svg-icons";
import {BehaviorSubject} from "rxjs";


@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {

  selectGroups = [
    {value: 0 as OrderBy, title: 'Rate'},
    {value: 1 as OrderBy, title: 'Price'},
    {value: 2 as OrderBy, title: 'Delivery Date'},
  ];
  currentGroup = this.selectGroups[0];
  iconGroup = {
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
  isPopupHidden$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService, private plantService: PlantService) {
  }

  getPlants() {
    this.plantService.getAll(this.currentCategory?.id!, this.pageNumber!, this.pageSize, this.currentGroup.value, this.iconGroup.isAsc).subscribe(response => {
      this.items = response.items;
      this.hasNextPage = response.hasNextPage;
      this.hasPreviousPage = response.hasPreviousPage;
      this.totalPages = response.totalPages;
      this.pageNumber = response.pageNumber;
      this.totalCount = response.totalCount;
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(res => {
      this.pageNumber = 1;
      this.categoryService.get(res['categoryId']).subscribe(res => {
        this.currentCategory = res;
        console.log(res)
        this.getPlants();
      })
    });
  }

  onChangeCurrentPage($event: number) {
    this.pageNumber = $event;
    this.getPlants();
  }

  select(group: { title: string; value: 0 | 1 | 2 }) {
    this.currentGroup = group;
    this.getPlants();
  }

  changeArrangingMethod() {
    this.iconGroup.isAsc = !this.iconGroup.isAsc;
    this.getPlants();
  }
}
