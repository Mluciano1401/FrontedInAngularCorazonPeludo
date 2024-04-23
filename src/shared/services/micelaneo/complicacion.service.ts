import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complicacion } from '../../../app/miscelaneo/model/complicacion';

@Injectable({
  providedIn: 'root'
})
export class ComplicacionService {
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<Complicacion>{
    return this.http.get<Complicacion>(this.urlbase+'complicacion');
  }
  create(body: Complicacion):Observable<any>{
    return this.http.post(this.urlbase+'complicacion',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}complicacion/delete/${id}`);
  }
  update(body: Complicacion):Observable<any>{
    return this.http.post(this.urlbase+'complicacion/update/',body);
}
}