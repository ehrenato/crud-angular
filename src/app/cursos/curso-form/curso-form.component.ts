import { Curso } from './../model/curso';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from './../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Location } from '@angular/common';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: CursosService,
              private snackBar: MatSnackBar,
              private location: Location,
              private route: ActivatedRoute) { 
    this.form = this.formBuilder.group({
      name: [null],
      categoria: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso.', '', { duration: 5000 });
  }

}
