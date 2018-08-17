import { Component, TemplateRef, ViewChild } from '@angular/core';
import { AkaBasicsService } from '../../services/aka-basics.service';
import { CONSTANTS } from '../../../app-constants';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'aka-navigation',
  templateUrl: './aka-navigation.component.html',
  styleUrls: ['./aka-navigation.component.scss']
})
export class AkaNavigationComponent {

  @ViewChild('navmycourses')
  private navmycourses: TemplateRef<any>;
  
  @ViewChild('navexplore')
  private navexplore: TemplateRef<any>;
  
  public navControls: TemplateRef<any>;
  public ROUTES: any;
  
  constructor(
    private router: Router,
    private basics: AkaBasicsService
  ) {
    this.ROUTES = CONSTANTS.ROUTES;
    
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationStart) {
        switch(event.url) {
          case `/`:
          case `/${this.ROUTES.MY_COURSES.URL}`:
          case `/${this.ROUTES.MY_COURSES.ACTIVE.FULL_URL}`:
          case `/${this.ROUTES.MY_COURSES.PATH.FULL_URL}`:
          case `/${this.ROUTES.MY_COURSES.APPROVED.FULL_URL}`:
            this.navControls = this.navmycourses;
            break;
          case `/${this.ROUTES.EXPLORE.URL}`:
          case `/${this.ROUTES.EXPLORE.CATEGORY.FULL_URL}`:
          case `/${this.ROUTES.EXPLORE.DIFFICULTY.FULL_URL}`:
            this.navControls = this.navexplore;
            break;
        }
      }
    });
  }

  public showLoginModal() {
    this.basics.openModal(CONSTANTS.MODALS.LOGIN);
  }

}