import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContentComponent],
  imports: [RouterModule],
  exports: [ContentComponent],
})
export class ContentModule {}
