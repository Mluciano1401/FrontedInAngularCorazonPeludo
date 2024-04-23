import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoSintoma } from '../../../app/miscelaneo/model/tipo-sintoma';

@Injectable({
  providedIn: 'root'
})
export class TipoSintomaService { 
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<TipoSintoma>{
    return this.http.get<TipoSintoma>(this.urlbase+'tiposintoma');
  }
  create(body: TipoSintoma):Observable<any>{
    return this.http.post(this.urlbase+'tiposintoma',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}tiposintoma/delete/${id}`);
  }
  update(body: TipoSintoma):Observable<any>{
    return this.http.post(this.urlbase+'tiposintoma/update/',body);}
}
