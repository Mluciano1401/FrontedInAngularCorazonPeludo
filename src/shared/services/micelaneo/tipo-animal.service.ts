import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoAnimal } from '../../../app/miscelaneo/model/tipo-animal';

@Injectable({
  providedIn: 'root'
})
export class TipoAnimalService {

 
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<TipoAnimal>{
    return this.http.get<TipoAnimal>(this.urlbase+'tipoanimal');
  }
  create(body: TipoAnimal):Observable<any>{
    return this.http.post(this.urlbase+'tipoanimal',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}tipoanimal/delete/${id}`);
  }
  update(body: TipoAnimal):Observable<any>{
    return this.http.post(this.urlbase+'tipoanimal/update/',body);}
}
