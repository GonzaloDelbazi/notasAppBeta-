
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { notaModel } from '../../models/nota.model';
import { NotaService } from '../../services/nota.service';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
  
  nota: notaModel = new notaModel();

  constructor(private notaService: NotaService,
              private router: Router) { }

  ngOnInit() {
  }

  guardar(form: NgForm){

    if (form.invalid) {

      console.log('Formulario no valido');
      return;
    }

    console.log(form);
    console.log(this.nota);

    this.notaService.postNota(this.nota)
    .subscribe(resp => {

      console.log(resp);
    });

    this.router.navigateByUrl('notas');

  }

}
