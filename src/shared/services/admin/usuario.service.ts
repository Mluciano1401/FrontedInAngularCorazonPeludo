import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../../app/admin/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<Usuario>{
    return this.http.get<Usuario>(this.urlbase+'usuario');
  }
  create(body: Usuario):Observable<any>{
    return this.http.post(this.urlbase+'usuario',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}usuario/delete/${id}`);
  }
  update(body: Usuario):Observable<any>{
    return this.http.post(this.urlbase+'usuario/update/',body);
}
}
