import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AkaLoginScreenComponent } from './components/aka-login-screen/aka-login-screen.component';
import { AkaMyCoursesComponent } from './components/aka-my-courses/aka-my-courses.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'my-courses',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AkaLoginScreenComponent
  },
  {
    path: 'my-courses',
    component: AkaMyCoursesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
