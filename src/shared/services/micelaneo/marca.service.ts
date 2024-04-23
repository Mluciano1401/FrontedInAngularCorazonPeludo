import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../../../app/miscelaneo/model/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<Marca>{
    return this.http.get<Marca>(this.urlbase+'marca');
  }
  create(body: Marca):Observable<any>{
    return this.http.post(this.urlbase+'marca',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}marca/delete/${id}`);
  }
  update(body: Marca):Observable<any>{
    return this.http.post(this.urlbase+'marca/update/',body);}
}
