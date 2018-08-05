import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AkaLoginScreenComponent } from './components/aka-login-screen/aka-login-screen.component';
import { AkaMyCoursesComponent } from './components/aka-my-courses/aka-my-courses.component';
import { AkaActiveCoursesComponent } from './components/aka-my-courses/aka-active-courses/aka-active-courses.component';
import { AkaApprovedCoursesComponent } from './components/aka-my-courses/aka-approved-courses/aka-approved-courses.component';
import { AkaPathComponent } from './components/aka-my-courses/aka-path-courses/aka-path-courses.component';
import { Aka404NotFoundComponent } from './components/aka-404-not-found/aka-404-not-found.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'my-courses/active',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AkaLoginScreenComponent
  },
  {
    path: 'my-courses',
    component: AkaMyCoursesComponent,
    children: [
      {
        path: 'active',
        component: AkaActiveCoursesComponent
      },
      {
        path: 'path',
        component: AkaPathComponent
      },
      {
        path: 'approved',
        component: AkaApprovedCoursesComponent
      }
    ]
  },
  {
    path: '**',
    component: Aka404NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
