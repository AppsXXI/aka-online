import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AkaLoginScreenComponent } from './components/aka-login-screen/aka-login-screen.component';
import { AkaMyCoursesComponent } from './components/aka-my-courses/aka-my-courses.component';
import { AkaActiveCourses } from './components/aka-my-courses/aka-active-courses/aka-active-courses.component';
import { AkaApprovedCourses } from './components/aka-my-courses/aka-approved-courses/aka-approved-courses.component';
import { AkaPathComponent } from './components/aka-my-courses/aka-path-courses/aka-path-courses.component';

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
    component: AkaMyCoursesComponent,
    children: [
      {
        path: 'active',
        component: AkaActiveCourses
      },
      {
        path: 'path',
        component: AkaPathComponent
      },
      {
        path: 'approved',
        component: AkaApprovedCourses
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
