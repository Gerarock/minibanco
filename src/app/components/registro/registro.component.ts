import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  form: FormGroup;
  flagCreateUser: boolean = false;

  constructor(private formBuilder: FormBuilder, public usuarioService: UsuarioService, private _router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): any {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      rut: ['', [Validators.required]],
      correo: ['', [Validators.required,  Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  unsplashClass(): any {
    return {
      'min-height': '100%',
      background: `url(/assets/img/login.jpg) no-repeat center center`,
      'background-size': 'cover',
      position: 'relative',
    };
  }

  async registro(event: Event) {
      event.preventDefault();
      if (this.form.valid) {
        const value = this.form.value;
        const usuarioValido = await this.usuarioService.register(value.nombre, value.rut, value.correo, value.password);
  
        if (usuarioValido) {
          this.usuarioService.autentificado = true // GUARD
          this._router.navigateByUrl('/login');
        } else {
          console.log('NO OK', this.usuarioService.token);
        }
      }
    
  }

  volver(){
    this.flagCreateUser = true;
  }

}
