import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RescateService {

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
