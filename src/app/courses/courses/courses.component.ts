import {Course} from '../model/course';
import {
  Component,
  OnInit
} from '@angular/core';
import {CoursesService} from "../services/courses.service";
import {catchError, Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {
  ErrorDialogComponent
} from "../../shared/components/error-dialog/error-dialog.component";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})


export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category',];
  filmes$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {
    this.filmes$ = this.coursesService.listAll()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar Filmes')
          return of([])
        })
      )
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  ngOnInit(): void {
  }


}
