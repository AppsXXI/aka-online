import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AkaLoginScreenComponent } from './components/aka-login-screen/aka-login-screen.component';
import { AkaMyCoursesComponent } from './components/aka-my-courses/aka-my-courses.component';
import { AkaActiveCoursesComponent } from './components/aka-my-courses/aka-active-courses/aka-active-courses.component';
import { AkaApprovedCoursesComponent } from './components/aka-my-courses/aka-approved-courses/aka-approved-courses.component';
import { AkaPathComponent } from './components/aka-my-courses/aka-path-courses/aka-path-courses.component';
import { Aka404NotFoundComponent } from './components/aka-404-not-found/aka-404-not-found.component';

import { CONSTANTS } from './app-constants';
import { AkaExploreComponent } from './components/aka-explore/aka-explore.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: CONSTANTS.ROUTES.MY_COURSES.ACTIVE.FULL_URL,
    pathMatch: 'full'
  },
  {
    path: CONSTANTS.ROUTES.LOGIN.URL,
    component: AkaLoginScreenComponent
  },
  {
    path: CONSTANTS.ROUTES.MY_COURSES.URL,
    component: AkaMyCoursesComponent,
    children: [
      {
        path: CONSTANTS.ROUTES.MY_COURSES.ACTIVE.URL,
        component: AkaActiveCoursesComponent
      },
      {
        path: CONSTANTS.ROUTES.MY_COURSES.PATH.URL,
        component: AkaPathComponent
      },
      {
        path: CONSTANTS.ROUTES.MY_COURSES.APPROVED.URL,
        component: AkaApprovedCoursesComponent
      }
    ]
  },
  {
    path: CONSTANTS.ROUTES.EXPLORE.URL,
    component: AkaExploreComponent
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
