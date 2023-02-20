import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {OrderBy, PlantBriefDtoPaginatedList, PlantDto, SearchPlantBriefDtoCollection} from "../api/api";

@Injectable({
  providedIn: 'root'
})
export class PlantService extends BaseService {

  getAll(categoryId: string, pageNumber: number, pageSize: number, orderBy: OrderBy, ascendign: boolean): Observable<PlantBriefDtoPaginatedList> {
    return this.client.getAll4(categoryId, pageNumber, pageSize, orderBy, ascendign, this.apiVersion);
  }

  get(plantId: string): Observable<PlantDto> {
    return this.client.get4(plantId, this.apiVersion);
  }

  search(searchString: string): Observable<SearchPlantBriefDtoCollection> {
    return this.client.search(searchString, this.apiVersion);
  }
}
