import { HttpClient } from '@angular/common/http';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  autentificado = false;

  constructor(private http: HttpClient, private _router: Router ) { }

  login(rut: string, password: string) {
    const data = { rut, password };
    return new Promise(resolve => {
      this.http.post(`${URL}/usuario/login`, data)
        .subscribe((res: any) => {
          if (res.ok) {
            this.guardarToken(res.token);
            resolve(true);
          } else {
            resolve(false);
            this.logOut();
          }
        });
    });
  }

  register(nombre: string, rut: string, correo: string, password: string) {
    const data = { nombre, rut, correo, password };
    return new Promise(resolve => {
      this.http.post(`${URL}/usuario/crear`, data)
        .subscribe((res: any) => {
          if (res.ok) {
            this.guardarToken(res.token);
            resolve(true);
          } else {
            resolve(false);
            this.logOut();
          }
        });
    });
  }

  getUsuario(rut: string) {
    const data = rut;
    return new Promise(resolve => {
      this.http.get(`${URL}/usuario/` + data )
        .subscribe((res: any) => {
          if (res) {
            resolve(res);
          } else {
            resolve(false);
          }
        });
    });
  }

  logOut() {
    this.token = null;
    this.autentificado = false;
    this._router.navigateByUrl('/login');
  }

  guardarToken(token: string) {
    this.token = token;
  }

}
