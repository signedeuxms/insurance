import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

const MATERIAL = [
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatToolbarModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL
  ],
  exports: [...MATERIAL]
})
export class MaterialModule { }
