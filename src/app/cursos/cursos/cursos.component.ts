import { Curso } from './../model/curso';
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Curso[]>;
  displayedColumns = ['name', 'categoria', 'actions'];

  

  constructor(private cursosService: CursosService) {
  
    this.cursos$ = this.cursosService.list()
    .pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
    );
  
    // this.courses = []; (pode ser assim tmb para instanciar uma classe)
   }

  ngOnInit(): void {
  }

  onAdd() {
    console.log('onAdd');
  }

}
