import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { notaModel } from '../../models/nota.model';
import { NotaService } from '../../services/nota.service';

@Component({
  selector: 'app-ver-nota',
  templateUrl: './ver-nota.component.html',
  styleUrls: ['./ver-nota.component.css']
})
export class VerNotaComponent implements OnInit {

  nota: notaModel = new notaModel();

  id = this.route.snapshot.paramMap.get('id');

  constructor(private notaService: NotaService,
              private route: ActivatedRoute) { }

  ngOnInit(){
    this.notaService.getNota(this.id).subscribe((resp: any) => {
      this.nota  = resp;
      console.log(resp);
    });


  }

  actualizar(nota: notaModel){
    this.nota.id = this.id;
    this.notaService.actualizarNota(nota).subscribe(resp => {
      console.log(resp);
    });
  }
}
