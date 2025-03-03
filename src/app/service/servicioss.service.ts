import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciossService {

  constructor(private http:HttpClient) { }
  private API_SERVICIOS='http://localhost:3000/servicios';

  postServicios(servicio:any):Observable<any>{
    return this.http.post(this.API_SERVICIOS,servicio)
  }
 
  
getServicios(): Observable<any[]> {
  return this.http.get<any[]>(this.API_SERVICIOS);
}

deleteServicios(id: number): Observable<any> {
  return this.http.delete(`${this.API_SERVICIOS}/${id}`);
}

getserviciobyid(id: any): Observable<any> {
  return this.http.get(`${this.API_SERVICIOS}/${id}`);
  
}

putservicio(servicio: any): Observable<any> {
  return this.http.put(`${this.API_SERVICIOS}/${servicio.id}`, servicio);
}


}

