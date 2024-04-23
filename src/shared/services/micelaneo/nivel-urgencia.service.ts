import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NivelUrgencia } from '../../../app/miscelaneo/model/nivel-urgencia';

@Injectable({
  providedIn: 'root'
})
export class NivelUrgenciaService {

  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<NivelUrgencia>{
    return this.http.get<NivelUrgencia>(this.urlbase+'nivelurgencia');
  }
  create(body: NivelUrgencia):Observable<any>{
    return this.http.post(this.urlbase+'nivelurgencia',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}nivelurgencia/delete/${id}`);
  }
  update(body: NivelUrgencia):Observable<any>{
    return this.http.post(this.urlbase+'nivelurgencia/update/',body);}
}
