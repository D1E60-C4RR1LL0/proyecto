import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { NopageComponent } from './pages/nopage/nopage.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'ayuda',
    component:AyudaComponent
  },
  //el path de Nopage siempre va al final de las rutas para que no de error en las otas rutas
  {
    path:'**',
    component:NopageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
