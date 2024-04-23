import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstadoEmergencia } from '../../../app/miscelaneo/model/estado-emergencia';

@Injectable({
  providedIn: 'root'
})
export class EstadoEmergenciaService {
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<EstadoEmergencia>{
    return this.http.get<EstadoEmergencia>(this.urlbase+'estadoemergencia');
  }
  create(body: EstadoEmergencia):Observable<any>{
    return this.http.post(this.urlbase+'estadoemergencia',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}estadoemergencia/delete/${id}`);
  }
  update(body: EstadoEmergencia):Observable<any>{
    return this.http.post(this.urlbase+'estadoemergencia/update/',body);}
}
