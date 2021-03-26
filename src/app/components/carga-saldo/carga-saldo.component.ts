import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-carga-saldo',
  templateUrl: './carga-saldo.component.html',
  styles: [
  ]
})
export class CargaSaldoComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, public usuarioService: UsuarioService, private _router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): any {
    this.form = this.formBuilder.group({
      monto: ['', [Validators.required, Validators.minLength(15)]],
    });
  }

  async cargarSaldo(event: Event) {
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
