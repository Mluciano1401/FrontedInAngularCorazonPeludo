import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complejidad } from '../../../app/miscelaneo/model/complejidad';

@Injectable({
  providedIn: 'root'
})
export class ComplejidadService {
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<Complejidad>{
    return this.http.get<Complejidad>(this.urlbase+'complejidad');
  }
  create(body: Complejidad):Observable<any>{
    return this.http.post(this.urlbase+'complejidad',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}complejidad/delete/${id}`);
  }
  update(body: Complejidad):Observable<any>{
    return this.http.post(this.urlbase+'complejidad/update/',body);
}
}
