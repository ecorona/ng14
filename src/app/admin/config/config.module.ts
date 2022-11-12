import { SessionGuard } from './../../auth/session.guard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { ConfigWhatsComponent } from './config-whats/config-whats.component';
import { ConfigEmailComponent } from './config-email/config-email.component';
import { AdminGuard } from 'src/app/auth/admin.guard';

const routes: Routes = [
  {
    path: 'config',
    component: ConfigComponent,
    canActivate: [SessionGuard, AdminGuard],
  },
  {
    path: 'config-whats',
    component: ConfigWhatsComponent,
    canActivate: [SessionGuard, AdminGuard],
  },
  {
    path: 'config-email',
    component: ConfigEmailComponent,
    canActivate: [SessionGuard, AdminGuard],
  },
];

@NgModule({
  declarations: [ConfigComponent, ConfigWhatsComponent, ConfigEmailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ConfigModule {}
