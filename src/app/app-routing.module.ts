import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AkaLoginScreenComponent } from './components/aka-login-screen/aka-login-screen.component';

const ROUTES: Routes = [
  {
    path: 'login',
    component: AkaLoginScreenComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
