import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoVehiculo } from '../../../app/miscelaneo/model/tipo-vehiculo';

@Injectable({
  providedIn: 'root'
})
export class TipoVehiculoService {
 
  urlbase = '';
  constructor(public http: HttpClient) { }

  getData(): Observable<TipoVehiculo>{
    return this.http.get<TipoVehiculo>(this.urlbase+'tipovehiculo');
  }
  create(body: TipoVehiculo):Observable<any>{
    return this.http.post(this.urlbase+'tipovehiculo',body);
  }
  delete(id:number){
    return this.http.get(`${this.urlbase}tipovehiculo/delete/${id}`);
  }
  update(body: TipoVehiculo):Observable<any>{
    return this.http.post(this.urlbase+'tipovehiculo/update/',body);}
}
