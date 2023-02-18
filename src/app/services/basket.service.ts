import {Injectable, OnInit} from '@angular/core';
import {BaseService} from "./base.service";
import {AddToBasketCommand, BasketItemDto, BasketItemDtoCollection, Client, RemoveFromBasketCommand} from "../api/api";
import {map, Observable, Subject} from "rxjs";
import {Unit} from "@faker-js/faker";

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class BasketService extends BaseService {

  constructor(private override client: Client) {
    super(client);
    this.setBasketCount()
  }

  private basketCount = new Subject<number>();
  public basketCount$ = this.basketCount.asObservable();

  updateBasketCount() {
    this.setBasketCount()
  }

  private setBasketCount() {
    this.client.getBasketCount({}, this.apiVersion).subscribe(response => {
      this.basketCount.next(response.count as number);
    })
  }

  get(): Observable<BasketItemDtoCollection> {
    return this.client.get({}, this.apiVersion);
  }

  clear(): Observable<void> {
    return this.client.clear(this.apiVersion, {});
  }

  update(items: BasketItemDto[] | undefined): Observable<void> {
    return this.client.update(this.apiVersion, {items: items})
  }

  addToBasket(body: AddToBasketCommand): Observable<boolean> {
    return this.client.addToBasket(this.apiVersion, body);
  }

  removeFromBasket(body: RemoveFromBasketCommand): Observable<boolean> {
    return this.client.removeFromBasket(this.apiVersion, body);
  }
}
