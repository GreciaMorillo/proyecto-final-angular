import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from '../contenido/blog/blog.component';
import { ContactoComponent } from '../contenido/contacto/contacto.component';
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
  path:'blog',
  component:BlogComponent
},
{
  path:'contacto',
  component:ContactoComponent
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
