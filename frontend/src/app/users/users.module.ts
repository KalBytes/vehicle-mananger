import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent, SingleUserPageComponent } from './pages';
import { UsersRoutingModule } from './users-routing';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
  ],
  declarations: [UsersPageComponent, SingleUserPageComponent],
  exports: [UsersPageComponent, SingleUserPageComponent],
})
export class UsersModule {}
