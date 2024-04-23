import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../../../app/admin/model/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<Tarea>{
    return this.http.get<Tarea>(this.urlbase+'tarea');
  }
  create(body: Tarea):Observable<any>{
    return this.http.post(this.urlbase+'tarea',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}tarea/delete/${id}`);
  }
  update(body: Tarea):Observable<any>{
    return this.http.post(this.urlbase+'tarea/update/',body);
}
}
