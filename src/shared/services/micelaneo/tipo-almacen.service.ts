import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoAlmacen } from '../../../app/miscelaneo/model/tipo-almacen';

@Injectable({
  providedIn: 'root'
})
export class TipoAlmacenService {

 
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<TipoAlmacen>{
    return this.http.get<TipoAlmacen>(this.urlbase+'tipoalmacen');
  }
  create(body: TipoAlmacen):Observable<any>{
    return this.http.post(this.urlbase+'tipoalmacen',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}tipoalmacen/delete/${id}`);
  }
  update(body: TipoAlmacen):Observable<any>{
    return this.http.post(this.urlbase+'tipoalmacen/update/',body);}
}
