import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoAlimento } from '../../../app/miscelaneo/model/tipo-alimento';

@Injectable({
  providedIn: 'root'
})
export class TipoAlimentoService {

 
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<TipoAlimento>{
    return this.http.get<TipoAlimento>(this.urlbase+'tipoalimento');
  }
  create(body: TipoAlimento):Observable<any>{
    return this.http.post(this.urlbase+'tipoalimento',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}tipoalimento/delete/${id}`);
  }
  update(body: TipoAlimento):Observable<any>{
    return this.http.post(this.urlbase+'tipoalimento/update/',body);}
}
