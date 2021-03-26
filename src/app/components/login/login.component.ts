import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  flagCreateUser: boolean = true;

  constructor(private formBuilder: FormBuilder, public usuarioService: UsuarioService, private _router: Router) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): any {
    this.form = this.formBuilder.group({
      rut: ['', [Validators.required]],
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

  register() {
    this.flagCreateUser = false;
    this._router.navigateByUrl('/registro');
  }

  async login(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      const usuarioValido = await this.usuarioService.login(value.rut, value.password);

      if (usuarioValido) {
        this.usuarioService.autentificado = true // GUARD
        localStorage.setItem('usuario', value.rut);
        this._router.navigate(['/home']);
      } else {
        console.log('NO OK', this.usuarioService.token);
      }
    }
  }

}
