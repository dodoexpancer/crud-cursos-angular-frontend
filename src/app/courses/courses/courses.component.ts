import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';


const movies: Course[] = [{name: 'O Assalto ao banco mais perigoso do mundo', _id: '12', category: 'Ação'}];

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  filmes = movies;
  displayedColumns: string[] = ['name', 'category',];

  ngOnInit(): void {
  }

}
