import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoProducto } from '../../../app/miscelaneo/model/tipo-producto';

@Injectable({
  providedIn: 'root'
})
export class TipoProductoService { 
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<TipoProducto>{
    return this.http.get<TipoProducto>(this.urlbase+'tipoproducto');
  }
  create(body: TipoProducto):Observable<any>{
    return this.http.post(this.urlbase+'tipoproducto',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}tipoproducto/delete/${id}`);
  }
  update(body: TipoProducto):Observable<any>{
    return this.http.post(this.urlbase+'tipoproducto/update/',body);}
}
