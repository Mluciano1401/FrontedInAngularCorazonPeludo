import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActividadEconomica } from '../../../app/miscelaneo/model/actividad-economica';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadEconomicaService {
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<ActividadEconomica>{
    return this.http.get<ActividadEconomica>(this.urlbase+'actividadeconomica');
  }
  create(body: ActividadEconomica):Observable<any>{
    return this.http.post(this.urlbase+'actividadeconomica',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}actividadeconomica/delete/${id}`);
  }
  update(body: ActividadEconomica):Observable<any>{
    return this.http.post(this.urlbase+'actividadeconomica/update/',body);
  }
}
