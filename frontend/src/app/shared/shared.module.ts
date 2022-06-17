import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialTableComponent, SearchInputComponent } from './components';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [MaterialTableComponent, SearchInputComponent],
  exports: [MaterialTableComponent, SearchInputComponent],
})
export class SharedModule {}
