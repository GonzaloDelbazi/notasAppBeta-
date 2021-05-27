import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotasComponent } from './components/notas/notas.component';
import { NotaComponent } from './components/nota/nota.component';
import { VerNotaComponent } from './components/ver-nota/ver-nota.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'notas', component: NotasComponent},
  {path: 'nota/:id', component: NotaComponent},
  {path: 'editarNota/:id', component: VerNotaComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'notas'}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    CommonModule


  ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
