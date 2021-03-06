import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private URL = "http://localhost:3303/api";
  constructor(private httpClient: HttpClient, private router: Router) {}

  signUp(user) {
    // retorna un observable
    return this.httpClient.post<any>(`${this.URL}/signup`, user);
  }

  signIn(user) {
    return this.httpClient.post<any>(`${this.URL}/signin`, user);
  }

  // comprobar si el usuario esta logeado o no
  loggedIn() {
    // si tiene el token esta logeado , sino no esta logueado
    return !!localStorage.getItem("token");
  }
  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/tasks"]);
  }
  getToken() {
    return localStorage.getItem("token");
  }
}
