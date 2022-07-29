import { Component, OnInit } from '@angular/core';
import { ContenidoService } from '../contenido.service';
import { Cursos } from '../interfaces/cursos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Cursos[]=[]
  constructor(private servicio:ContenidoService) { }


  ngOnInit(): void {

    this.servicio.getCursos().subscribe(
      resp=>this.cursos=resp

    )

  }

}
