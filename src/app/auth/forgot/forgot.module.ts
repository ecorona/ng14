import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotComponent } from './forgot.component';
import { NoSessionGuard } from '../no-session.guard';

const routes: Routes = [
  {
    path: 'forgot',
    component: ForgotComponent,
    canActivate: [NoSessionGuard],
  },
];
@NgModule({
  declarations: [ForgotComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ForgotModule {}
