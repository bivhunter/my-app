import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule
  ],
})
export class MaterialModule {}
