import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetComponent } from './reset.component';
import { Routes, RouterModule } from '@angular/router';
import { NoSessionGuard } from '../no-session.guard';

const routes: Routes = [
  {
    path: 'reset',
    component: ResetComponent,
    canActivate: [NoSessionGuard],
  },
];

@NgModule({
  declarations: [ResetComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ResetModule {}
