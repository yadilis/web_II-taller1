import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: any;

  users = [
    {
      email: "estudiante@ejemplo.com",
      password: "12345",
      role: "estudiante"
    },
    {
      email: "tutor@ejemplo.com",
      password: "12345",
      role: "tutor"
    }
  ];

  constructor(private router: Router) { }

  login(email: string, password: string): void {
    const user = this.users.find(u => u.email === email && u.password === password);

    if (user) {
      this.currentUser = user;
      localStorage.setItem('user', JSON.stringify(user));
      if (user.role === 'estudiante') {
        this.router.navigate(['/estudiante']);
      } else if (user.role === 'tutor') {
        this.router.navigate(['/tutor']);
      }
    } else {
      alert('Correo o contraseña incorrectos');
    }
  }

  getUserRole(): string | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).role : null;
  }

  hasRole(role: string): boolean {
    const currentRole = this.getUserRole();
    return currentRole === role; 
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
