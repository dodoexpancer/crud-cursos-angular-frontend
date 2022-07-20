import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorDialogComponent} from './components/error-dialog/error-dialog.component';
import {AppMaterialModule} from "./app-material/app-material.module";
import {MatButtonModule} from "@angular/material/button";
import { CategoryPipe } from './pipes/category.pipe';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    MatButtonModule
  ],
  exports: [
    ErrorDialogComponent,
    CategoryPipe
  ]
})
export class SharedModule {
}
