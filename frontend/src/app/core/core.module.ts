import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent, SubNavbarComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SubNavbarComponent, NavbarComponent],
  exports: [SubNavbarComponent, NavbarComponent],
})
export class CoreModule {}
