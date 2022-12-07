import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileModule } from './profile/profile.module';
import { ConfigModule } from './config/config.module';
import { RegiduriasModule } from './regidurias/regidurias.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    ProfileModule,
    ConfigModule,
    RegiduriasModule,
  ],
})
export class AdminModule {}
