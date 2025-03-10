import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciossService {

  constructor(private http:HttpClient) { }

  private API_ESTUDIANTES='http://localhost:3001/servicios';

  postEstudiantes(estudiante:any):Observable<any>{
    return this.http.post(this.API_ESTUDIANTES,estudiante)
  }
 
  
getEstudiantes(): Observable<any[]> {
  return this.http.get<any[]>(this.API_ESTUDIANTES);
}

deleteEstudiantes(id: number): Observable<any> {
  return this.http.delete(`${this.API_ESTUDIANTES}/${id}`);
}

getestudiantebyid(id: any): Observable<any> {
  return this.http.get(`${this.API_ESTUDIANTES}/${id}`);
  
}

putestudiante(estudiante: any): Observable<any> {
  return this.http.put(`${this.API_ESTUDIANTES}/${estudiante.id}`, estudiante);
}


}

