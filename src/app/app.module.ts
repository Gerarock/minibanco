import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CargaSaldoComponent } from './components/carga-saldo/carga-saldo.component';
import { HomeComponent } from './components/home/home.component';

import { MaterialModule } from 'src/app/material/material.module';
import { SidebarModule } from 'ng-sidebar';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RouterModule } from '@angular/router';
import { RetiroSaldoComponent } from './components/retiro-saldo/retiro-saldo.component';

@NgModule({
  declarations: [
    AppComponent,
    CargaSaldoComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    RetiroSaldoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
