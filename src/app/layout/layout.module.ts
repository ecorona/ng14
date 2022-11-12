import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VerticalModule } from './vertical/vertical.module';

@NgModule({
  imports: [VerticalModule, RouterModule],
  exports: [VerticalModule],
})
export class LayoutModule {}
