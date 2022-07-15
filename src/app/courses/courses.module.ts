import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CoursesRoutingModule} from './courses-routing.module';
import {CoursesComponent} from './courses/courses.component';
import {AppMaterialModule} from "../shared/app-material/app-material.module";
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    MatToolbarModule,
  ],
})
export class CoursesModule {
}
