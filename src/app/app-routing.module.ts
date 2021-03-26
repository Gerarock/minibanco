import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargaSaldoComponent } from './components/carga-saldo/carga-saldo.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
/*   {
    path: 'login', loadChildren: () =>
    import('./components/login/login.module').then(m => m.LoginModule)
  }, */
/*   {
    path: 'home', loadChildren: () =>
    import('./components/home/home.module').then(m => m.HomeModule),
    canActivate: [LoginGuard]
  }, */
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cargasaldo', component: CargaSaldoComponent },
  { path: 'registro', component: RegistroComponent },
  
/*   {
    path: 'registro', loadChildren: () =>
    import('./components/registro/registro.module').then(m => m.RegistroModule)
  }, */
/*   {
    path: 'cargasaldo', loadChildren: () =>
    import('./components/carga-saldo/carga-saldo.module').then(m => m.CargaSaldoModule),
    canActivate: [LoginGuard]
  }, */
/*  asdasdasdasdasdasdasdasasdasdasdasdasdasdas {
    path: 'retirosaldo', loadChildren: () =>
    import('./components/retiro-saldo/retiro-saldo.module').then(m => m.RetiroSaldoModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'transferencia', loadChildren: () =>
    import('./components/transferencia/transferencia.module').then(m => m.TransferenciaModule),
    canActivate: [LoginGuard]
  }, */
  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
