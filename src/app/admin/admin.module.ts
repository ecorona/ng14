import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeModule, ProfileModule],
})
export class AdminModule {}
