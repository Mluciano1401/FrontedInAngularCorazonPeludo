import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modelo } from '../../../app/miscelaneo/model/modelo';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<Modelo>{
    return this.http.get<Modelo>(this.urlbase+'modelo');
  }
  create(body: Modelo):Observable<any>{
    return this.http.post(this.urlbase+'modelo',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}modelo/delete/${id}`);
  }
  update(body: Modelo):Observable<any>{
    return this.http.post(this.urlbase+'modelo/update/',body);}
}
