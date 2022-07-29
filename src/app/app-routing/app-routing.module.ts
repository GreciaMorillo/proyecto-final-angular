import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from '../contenido/busqueda/busqueda.component';
import { CentrosComponent } from '../contenido/centros/centros.component';
import { ContactoComponent } from '../contenido/contacto/contacto.component';
import { CursosComponent } from '../contenido/cursos/cursos.component';
import { InicioComponent } from '../contenido/inicio/inicio.component';
import { NosotrosComponent } from '../contenido/nosotros/nosotros.component';

const routes: Routes = [

  {
    path:'',
    component:InicioComponent,
    pathMatch:'full'
 },
{
  path:'nosotros',
  component:NosotrosComponent
},

{
  path:'contacto',
  component:ContactoComponent
},
{
  path:'cursos',
  component:CursosComponent
},
{
  path:'busqueda',
  component:BusquedaComponent
},
{
  path:'centros',
  component:CentrosComponent
},
{
  path:'**',
  redirectTo:''
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
