import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../guards/role.guard';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Obtener el rol del usuario actual
    const userRole = this.authService.getUserRole();

    // Verifica si el usuario tiene el rol necesario para acceder
    if (userRole && userRole === 'admin') {
      return true;  // El acceso es permitido si el rol es 'admin'
    } else {
      // Si no tiene el rol adecuado, redirigir al login o una página de error
      this.router.navigate(['/login']);  // Redirigir a la página de login
      return false;
    }
  }
}
