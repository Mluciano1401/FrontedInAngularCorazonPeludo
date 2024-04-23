import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoUsuario } from '../../../app/miscelaneo/model/tipo-usuario';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {
 
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<TipoUsuario>{
    return this.http.get<TipoUsuario>(this.urlbase+'tipousuario');
  }
  create(body: TipoUsuario):Observable<any>{
    return this.http.post(this.urlbase+'tipousuario',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}tipousuario/delete/${id}`);
  }
  update(body: TipoUsuario):Observable<any>{
    return this.http.post(this.urlbase+'tipousuario/update/',body);}
}
