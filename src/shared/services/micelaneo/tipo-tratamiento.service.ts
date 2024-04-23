import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoTratamiento } from '../../../app/miscelaneo/model/tipo-tratamiento';

@Injectable({
  providedIn: 'root'
})
export class TipoTratamientoService {
 
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<TipoTratamiento>{
    return this.http.get<TipoTratamiento>(this.urlbase+'tipotratamiento');
  }
  create(body: TipoTratamiento):Observable<any>{
    return this.http.post(this.urlbase+'tipotratamiento',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}tipotratamiento/delete/${id}`);
  }
  update(body: TipoTratamiento):Observable<any>{
    return this.http.post(this.urlbase+'tipotratamiento/update/',body);}
}
