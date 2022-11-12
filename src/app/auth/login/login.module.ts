import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialCommonModule } from 'src/app/common/material.module';
import { NoSessionGuard } from '../no-session.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [],
  },
];

@NgModule({
  declarations: [LoginComponent],
  providers: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MaterialCommonModule,
  ],
})
export class LoginModule {}
