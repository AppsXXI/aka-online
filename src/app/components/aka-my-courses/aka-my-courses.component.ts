import { Component } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";

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

  private redirectFromMyCourses(url) {
    if (url == "/my-courses") {
      this.router.navigate(['/my-courses/active']);
    }
  }
  
}