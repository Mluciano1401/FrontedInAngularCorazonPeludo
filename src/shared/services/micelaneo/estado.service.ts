import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from '../../../app/miscelaneo/model/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<Estado>{
    return this.http.get<Estado>(this.urlbase+'estado');
  }
  create(body: Estado):Observable<any>{
    return this.http.post(this.urlbase+'estado',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}estado/delete/${id}`);
  }
  update(body: Estado):Observable<any>{
    return this.http.post(this.urlbase+'estado/update/',body);}
}
