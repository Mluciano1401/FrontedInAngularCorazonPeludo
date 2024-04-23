import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Especie } from '../../../app/miscelaneo/model/especie';

@Injectable({
  providedIn: 'root'
})
export class EspecieService {

  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<Especie>{
    return this.http.get<Especie>(this.urlbase+'especie');
  }
  create(body: Especie):Observable<any>{
    return this.http.post(this.urlbase+'especie',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}especie/delete/${id}`);
  }
  update(body: Especie):Observable<any>{
    return this.http.post(this.urlbase+'especie/update/',body);}
}
