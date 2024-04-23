import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstadoCivil } from '../../../app/miscelaneo/model/estado-civil';

@Injectable({
  providedIn: 'root'
})
export class EstadoCivilService {
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<EstadoCivil>{
    return this.http.get<EstadoCivil>(this.urlbase+'estadocivil');
  }
  create(body: EstadoCivil):Observable<any>{
    return this.http.post(this.urlbase+'estadocivil',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}estadocivil/delete/${id}`);
  }
  update(body: EstadoCivil):Observable<any>{
    return this.http.post(this.urlbase+'estadocivil/update/',body);}
}
