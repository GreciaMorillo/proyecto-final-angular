import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CursosComponent } from './cursos/cursos.component';
import { CentrosComponent } from './centros/centros.component';
import { BusquedaComponent } from './busqueda/busqueda.component';



@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent,
    ContactoComponent,
    CursosComponent,
    CentrosComponent,
    BusquedaComponent
  ],
  exports:[
    InicioComponent,
    NosotrosComponent,
    ContactoComponent,
    CursosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContenidoModule { }
