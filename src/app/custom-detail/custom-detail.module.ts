import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDetailComponent } from "./custom-detail.component";
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [CustomDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ]
})
export class CustomDetailModule { }
