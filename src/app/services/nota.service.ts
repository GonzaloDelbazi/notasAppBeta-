import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { notaModel } from '../models/nota.model';
import {delay, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  url:string = 'https://notasapp-96a4a-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }


  deleteNota(id: string){
    console.log(id);
    return this.http.delete(`${this.url}/notas/${id}.json`);
  }

  actualizarNota(nota: notaModel){
    
    const notaTemp = {
      ...nota
    };

    delete notaTemp.id;

    console.log(nota.id);
    return this.http.put(`${this.url}/notas/${nota.id}.json`, notaTemp);
  }

  postNota(nota: notaModel){
    return this.http.post(`${this.url}/notas.json`, nota);
  }

  getNota(id: string){

    return this.http.get(`${this.url}/notas/${id}.json`);
  }

  getNotas() {

    return this.http.get(`${this.url}/notas.json`)
    .pipe(map(resp => this.crearArreglo(resp)), delay(0));
  }


  private crearArreglo(notasObj: Object){

    const notas: notaModel[] = [];

    if (notasObj === null){
      return [];
    }

    Object.keys(notasObj).forEach(key => {

      const nota: notaModel = notasObj[key];
      nota.id = key;
      notas.push(nota);
    });

    return notas;
  }
}
