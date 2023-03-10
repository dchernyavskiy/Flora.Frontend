import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() public hasNextPage = false;
  @Input() public hasPreviousPage = false;
  @Input() public totalPages = 0;
  @Output() public currentPageChanged: EventEmitter<number> = new EventEmitter<number>();
  @Input() public currentPage = 1;

  range(): number[] {
    return Array.from({length: this.totalPages}, (x, i) => i + 1);
  }

  changeCurrentPage(page: number) {
    this.currentPage = page;
    this.currentPageChanged.emit(page);
  }
}
