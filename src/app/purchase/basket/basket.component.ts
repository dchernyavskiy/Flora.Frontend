import {Component, OnInit} from '@angular/core';
import {BasketService} from "../../services/basket.service";
import {BasketItemDto} from "../../api/api";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  quantity = 1;
  items: BasketItemDto[] | undefined;

  constructor(private basketService: BasketService) {

  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(){
    this.basketService.get().subscribe(res => {
      this.items = res.items;
    });
  }


  clear() {
    this.basketService.clear().subscribe(() => {
      this.items = [];
      this.basketService.updateBasketCount();
    })
  }

  amount(): number {
    return this.items?.reduce((sum, item) => sum + (item.quantity! * item.plant?.price!), 0)!;
  }

  update() {
    this.basketService.update(this.items).subscribe(()=>{
      console.log("basket is updated")
    });
  }
}
