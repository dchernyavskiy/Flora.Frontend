import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {CreateReviewCommand} from "../api/api";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReviewService extends BaseService{

  send(review: CreateReviewCommand): Observable<string>{
    return this.client.create5(this.apiVersion, review);
  }
}
