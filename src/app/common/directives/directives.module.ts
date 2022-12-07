import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisibleParaRolesDirective } from './visible-para-roles.directive';

@NgModule({
  declarations: [VisibleParaRolesDirective],
  imports: [CommonModule],
  exports: [VisibleParaRolesDirective],
})
export class DirectivesModule {}
