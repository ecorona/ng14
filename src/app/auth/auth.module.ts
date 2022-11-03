import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotModule } from './forgot/forgot.module';
import { LoginModule } from './login/login.module';
import { ResetModule } from './reset/reset.module';

@NgModule({
  declarations: [],
  imports: [ForgotModule, LoginModule, ResetModule, CommonModule],
})
export class AuthModule {}
