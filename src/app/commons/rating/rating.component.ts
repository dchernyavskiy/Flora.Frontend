import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {faStar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnChanges{
  @Input() public rate = 0;
  faStar = faStar;
  yellowStars: number[] = [];
  grayStars: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.yellowStars = Array.from({length: this.rate}).map((x, i) => i);
    this.grayStars = Array.from({length: 5 - Math.floor(this.rate)}).map((x, i) => i);
  }
}
