import { Component, OnInit } from '@angular/core';
import { notaModel } from '../../models/nota.model';
import { NotaService } from '../../services/nota.service';
import {faPen, faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  notas: notaModel[]  = [];
  cargando = false;
  noExiste = false;
  faPen = faPen;
  faTrash = faTrash;

  constructor(private notaService: NotaService) { }

  ngOnInit() {

    this.cargando = true;

    setTimeout(() => this.notaService.getNotas().subscribe(resp => {

      this.notas = resp;
      this.cargando = false;

      if (this.notas.length === 0){
        console.log(this.notas);
        this.noExiste = true;
      }
    }), 1000);
  }

  eliminar(nota: notaModel, i: number){
    console.log('Eliminando');
    console.log(nota.id);
    this.notas.splice(i, 1);
    this.notaService.deleteNota(nota.id).subscribe();
    this.ngOnInit();
      }


}

