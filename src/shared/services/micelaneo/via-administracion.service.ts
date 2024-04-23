import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViaAdministracion } from '../../../app/miscelaneo/model/via-administracion';

@Injectable({
  providedIn: 'root'
})
export class ViaAdministracionService {

  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<ViaAdministracion>{
    return this.http.get<ViaAdministracion>(this.urlbase+'viaadministracion');
  }
  create(body: ViaAdministracion):Observable<any>{
    return this.http.post(this.urlbase+'viaadministracion',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}viaadministracion/delete/${id}`);
  }
  update(body: ViaAdministracion):Observable<any>{
    return this.http.post(this.urlbase+'viaadministracion/update/',body);}
}
