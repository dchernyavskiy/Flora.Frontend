import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() public hasNextPage: boolean = false;
  @Input() public hasPreviousPage: boolean = false;
  @Input() public totalPages: number = 0;
  @Output() public currentPageChanged: EventEmitter<number> = new EventEmitter<number>();
  currentPage: number = 1;

  ngOnInit(): void {
  }

  range(): number[] {
    return Array.from({length: this.totalPages}, (x, i) => i + 1);
  }

  changeCurrentPage(page: number) {
    this.currentPage = page;
    this.currentPageChanged.emit(page);
  }
}
