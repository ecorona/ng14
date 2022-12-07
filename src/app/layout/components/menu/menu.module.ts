import { DirectivesModule } from './../../../common/directives/directives.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [DirectivesModule, CommonModule, RouterModule],
  exports: [MenuComponent],
})
export class MenuModule {}
