import { AdminGuard } from './../../auth/admin.guard';
import { SessionGuard } from './../../auth/session.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MaterialCommonModule } from 'src/app/common/material.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [SessionGuard, AdminGuard],
  },
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialCommonModule,
    FormsModule,
  ],
})
export class ProfileModule {}
