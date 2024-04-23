import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstadoLugar } from '../../../app/miscelaneo/model/estado-lugar';

@Injectable({
  providedIn: 'root'
})
export class EstadoLugarService {
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<EstadoLugar>{
    return this.http.get<EstadoLugar>(this.urlbase+'estadolugar');
  }
  create(body: EstadoLugar):Observable<any>{
    return this.http.post(this.urlbase+'estadolugar',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}estadolugar/delete/${id}`);
  }
  update(body: EstadoLugar):Observable<any>{
    return this.http.post(this.urlbase+'estadolugar/update/',body);}
}
