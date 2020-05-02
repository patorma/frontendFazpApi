import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
// aqui se protegen las rutas
// aqui se encarga una funcion si viene un token o no

  constructor(private authService: AuthService,
    private router: Router
    ){}
  
  canActivate(): boolean
  {
    if(this.authService.loggedIn()){
      return true;
    }

    this.router.navigate(['/signin']);
    return false;
  }
  
}