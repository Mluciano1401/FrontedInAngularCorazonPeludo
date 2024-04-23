import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from '../../../app/miscelaneo/model/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<Cita>{
    return this.http.get<Cita>(this.urlbase+'cita');
  }
  create(body: Cita):Observable<any>{
    return this.http.post(this.urlbase+'cita',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}cita/delete/${id}`);
  }
  update(body: Cita):Observable<any>{
    return this.http.post(this.urlbase+'cita/update/',body);
}
}