import { AdminGuard } from 'src/app/auth/admin.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'regidurias',
    canActivate: [AdminGuard],
    component: ListComponent,
  },
  {
    path: 'regidurias/:id',
    component: ViewComponent,
  },
];

@NgModule({
  declarations: [ListComponent, ViewComponent, EditComponent],
  imports: [CommonModule],
})
export class RegiduriasModule {}
