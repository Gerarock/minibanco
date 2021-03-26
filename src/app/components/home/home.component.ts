import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  showFiller = false;
  datoUsuario: any;
  usuario: any
  menu: any;
  isExpanded = true;
  element: HTMLElement;

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.datoUsuario = localStorage.getItem('usuario');
    this.getUsuario();
  }

  async getUsuario() {
    const rut = this.datoUsuario;
    this.usuario = await this.usuarioService.getUsuario(rut);
    this.usuario = this.usuario.nombre;
  }

  toggleActive(event: any, menu: any) {
    this.menu = menu;
    event.preventDefault();
    if (this.element !== undefined) {
      this.element.style.backgroundColor = "white";
    }
    var target = event.currentTarget;
    target.style.backgroundColor = "rgb(234 230 241)";
    this.element = target;
  }

  logout() {
    this.usuarioService.logOut();
  }



}
