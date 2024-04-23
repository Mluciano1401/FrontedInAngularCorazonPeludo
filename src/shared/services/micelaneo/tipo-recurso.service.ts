import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoRecurso } from '../../../app/miscelaneo/model/tipo-recurso';

@Injectable({
  providedIn: 'root'
})
export class TipoRecursoService {
 
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<TipoRecurso>{
    return this.http.get<TipoRecurso>(this.urlbase+'tiporecurso');
  }
  create(body: TipoRecurso):Observable<any>{
    return this.http.post(this.urlbase+'tiporecurso',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}tiporecurso/delete/${id}`);
  }
  update(body: TipoRecurso):Observable<any>{
    return this.http.post(this.urlbase+'tiporecurso/update/',body);}
}
