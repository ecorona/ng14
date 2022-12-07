import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '', // #/faq (app-routes)
    component: ListComponent,
  },
  {
    path: ':faqId', // #/faq/1
    component: ViewComponent,
  },
];

@NgModule({
  declarations: [ListComponent, ViewComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FaqModule {}
