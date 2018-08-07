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
  
  constructor(
    private router: Router,
    private basics: AkaBasicsService
  ) {
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationStart) {
        switch(event.url) {
          case '/my-courses/active':
          case '/my-courses/path':
          case '/my-courses/approved':
            this.navControls = this.navmycourses;
            break;
          case '/explore':
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