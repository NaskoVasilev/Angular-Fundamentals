import { Injectable } from '@angular/core';
import { Furniture } from '../models/furniture';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  private readonly createUrl = 'furniture/create';
  private readonly allUrl = 'furniture/all';
  private readonly detailsUrl = 'furniture/details/';
  private readonly userUrl = 'furniture/user';
  private readonly deleteUrl = 'furniture/delete/';
  private readonly getByIdUrl = 'furniture/';
  private readonly editUrl = 'furniture/edit/';

  constructor(private http: HttpClient) { }

  create(furniture: Furniture) {
    return this.http.post(this.createUrl, furniture);
  }

  all(): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(this.allUrl);
  }

  getDetails(id: string): Observable<Furniture> {
    return this.http.get<Furniture>(this.detailsUrl + id);
  }

  delete(id: string) {
    return this.http.delete(this.deleteUrl + id);
  }

  userFurnitures(): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(this.userUrl);
  }

  getById(id: string): Observable<Furniture> {
    return this.http.get<Furniture>(this.getByIdUrl + id);
  }
  
  edit(id: string, furniture: Furniture) {
    return this.http.put(this.editUrl + id, furniture);
  }
}
