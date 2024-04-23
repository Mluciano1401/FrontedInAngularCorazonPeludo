import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoTarea } from '../../../app/miscelaneo/model/tipo-tarea';

@Injectable({
  providedIn: 'root'
})
export class TipoTareaService {
 
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<TipoTarea>{
    return this.http.get<TipoTarea>(this.urlbase+'tipotarea');
  }
  create(body: TipoTarea):Observable<any>{
    return this.http.post(this.urlbase+'tipotarea',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}tipotarea/delete/${id}`);
  }
  update(body: TipoTarea):Observable<any>{
    return this.http.post(this.urlbase+'tipotarea/update/',body);}
}
