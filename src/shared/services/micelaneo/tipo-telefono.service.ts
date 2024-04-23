import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoTelefono } from '../../../app/miscelaneo/model/tipo-telefono';

@Injectable({
  providedIn: 'root'
})
export class TipoTelefonoService {
 
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<TipoTelefono>{
    return this.http.get<TipoTelefono>(this.urlbase+'tipotelefono');
  }
  create(body: TipoTelefono):Observable<any>{
    return this.http.post(this.urlbase+'tipotelefono',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}tipotelefono/delete/${id}`);
  }
  update(body: TipoTelefono):Observable<any>{
    return this.http.post(this.urlbase+'tipotelefono/update/',body);}
}
