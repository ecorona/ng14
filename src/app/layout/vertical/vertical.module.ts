import { MenuModule } from './../components/menu/menu.module';
import { HeaderModule } from './../components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalComponent } from './vertical.component';
import { ContentModule } from '../components/content/content.module';
import { FooterModule } from '../components/footer/footer.module';

@NgModule({
  declarations: [VerticalComponent],
  imports: [
    CommonModule,
    ContentModule,
    HeaderModule,
    FooterModule,
    MenuModule,
  ],
  exports: [VerticalComponent],
})
export class VerticalModule {}
