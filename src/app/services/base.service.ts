import {Injectable} from '@angular/core';
import {Client} from "../api/api";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected apiVersion: string = '1';

  constructor(protected client: Client) {
  }
}
