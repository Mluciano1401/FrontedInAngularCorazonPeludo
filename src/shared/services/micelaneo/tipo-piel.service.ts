import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoPiel } from '../../../app/miscelaneo/model/tipo-piel';

@Injectable({
  providedIn: 'root'
})
export class TipoPielService {
 
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<TipoPiel>{
    return this.http.get<TipoPiel>(this.urlbase+'tipopiel');
  }
  create(body: TipoPiel):Observable<any>{
    return this.http.post(this.urlbase+'tipopiel',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}tipopiel/delete/${id}`);
  }
  update(body: TipoPiel):Observable<any>{
    return this.http.post(this.urlbase+'tipopiel/update/',body);}
}
