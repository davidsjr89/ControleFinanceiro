
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private jwtHelper: JwtHelperService, private route: Router) { }

  canActivate(): boolean{
    const token = localStorage.getItem("tokenUsuarioLogado");
    if(token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }

    this.route.navigate(['usuarios/loginusuario']);
    return false;
  }

  VerificarAdministrador(): boolean {
      const token: any = localStorage.getItem("tokenUsuarioLogado");
      const tokenUsuario: any = jwt_decode(token);
      if(tokenUsuario.role === "Administrador"){
        return true;
      }
    return false;
  }
}
