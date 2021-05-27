import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NotaComponent } from './components/nota/nota.component';
import { NotasComponent } from './components/notas/notas.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { VerNotaComponent } from './components/ver-nota/ver-nota.component';
import { HomeComponent } from './components/home/home.component';

import { CaracteresPipe } from './pipes/caracteres.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NotaComponent,
    NotasComponent,
    NavbarComponent,
    VerNotaComponent,
    HomeComponent,
    CaracteresPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
