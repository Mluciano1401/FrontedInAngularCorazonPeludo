import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoAmputacion } from '../../../app/miscelaneo/model/tipo-amputacion';

@Injectable({
  providedIn: 'root'
})
export class TipoAmputacionService {

 
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<TipoAmputacion>{
    return this.http.get<TipoAmputacion>(this.urlbase+'tipoamputacion');
  }
  create(body: TipoAmputacion):Observable<any>{
    return this.http.post(this.urlbase+'tipoamputacion',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}tipoamputacion/delete/${id}`);
  }
  update(body: TipoAmputacion):Observable<any>{
    return this.http.post(this.urlbase+'tipoamputacion/update/',body);}
}
