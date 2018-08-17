import { Component } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { CONSTANTS } from "../../app-constants";

@Component({
  selector: 'aka-my-courses',
  templateUrl: './aka-my-courses.component.html',
  styleUrls: ['./aka-my-courses.component.scss']
})
export class AkaMyCoursesComponent {

  constructor(
    private router: Router
  ) {
    this.redirectFromMyCourses(this.router.url);
    
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.redirectFromMyCourses(event.url);
      }
    });
  }

  private redirectFromMyCourses(url: string): void {
    if (url == `/${CONSTANTS.ROUTES.MY_COURSES.URL}`) {
      this.router.navigate([`/${CONSTANTS.ROUTES.MY_COURSES.ACTIVE.FULL_URL}`]);
    }
  }
  
}