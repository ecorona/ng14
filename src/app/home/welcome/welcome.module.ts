import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeComponent } from './welcome.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
];

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class WelcomeModule {}
