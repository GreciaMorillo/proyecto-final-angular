import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { BlogComponent } from './blog/blog.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    InicioComponent,
    BlogComponent,
    NosotrosComponent,
    ContactoComponent
  ],
  exports:[
    InicioComponent,
    BlogComponent,
    NosotrosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContenidoModule { }
