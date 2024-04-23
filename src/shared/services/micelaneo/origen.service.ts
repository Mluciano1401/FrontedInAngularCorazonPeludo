import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Origen } from '../../../app/miscelaneo/model/origen';

@Injectable({
  providedIn: 'root'
})
export class OrigenService {

  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<Origen>{
    return this.http.get<Origen>(this.urlbase+'origen');
  }
  create(body: Origen):Observable<any>{
    return this.http.post(this.urlbase+'origen',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}origen/delete/${id}`);
  }
  update(body: Origen):Observable<any>{
    return this.http.post(this.urlbase+'origen/update/',body);}
}
