import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cursos } from './interfaces/cursos';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {
  constructor(private http:HttpClient) { }
  baseUrl:string="http://localhost:8087/api";

  getCursos(): Observable<Cursos[]>{
    return this.http.get(` ${this.baseUrl}/cursos `).pipe(
      map((response)=> response as Cursos[])
    );
  }

}
