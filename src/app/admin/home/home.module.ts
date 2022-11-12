import { SessionGuard } from './../../auth/session.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/auth/admin.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SessionGuard, AdminGuard],
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
