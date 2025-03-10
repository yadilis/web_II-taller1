import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private API_USERS = 'http://localhost:3000/users';

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.API_USERS);
  }


  postLogin(usuario: any): Observable<any> {
    return new Observable(observer => {
  
      this.http.get<any[]>(this.API_USERS).subscribe(users => {
       
        const user = users.find(u => u.email === usuario.email && u.password === usuario.password);
        
        if (user) {
        
          observer.next({ accessToken: 'fake-token', role: user.role });
        } else {
         
          observer.error({ message: 'Credenciales incorrectas' });
        }

        observer.complete();
      });
    });
  }
}
