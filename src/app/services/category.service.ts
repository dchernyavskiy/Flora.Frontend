import {Injectable} from '@angular/core';
import {CategoryBriefDtoCollection, CategoryDto} from "../api/api";
import {BaseService} from "./base.service";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {
  getAll(): Observable<CategoryBriefDtoCollection> {
    return this.client.getAll({}, this.apiVersion);
  }

  get(id:string):Observable<CategoryDto> {
    return this.client.get2(id, this.apiVersion);
  }
}
