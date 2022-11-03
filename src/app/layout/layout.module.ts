import { NgModule } from '@angular/core';
import { VerticalModule } from './vertical/vertical.module';

@NgModule({
  imports: [VerticalModule],
  exports: [VerticalModule],
})
export class LayoutModule {}
