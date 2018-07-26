import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private previousUrl: string;
  private classPrefix: string = 'path-rule-';
  private classToAdd: string;
  private classToRemove: string;

  constructor(
    private router: Router,
    private renderer: Renderer2
  ) {
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.classToAdd && this.classToAdd != '') {
          this.classToRemove = this.classToAdd;
        }

        let currentUrlSlug = event.url.slice(1);

        if (currentUrlSlug && currentUrlSlug != '') {
          this.classToAdd = `${this.classPrefix}${currentUrlSlug}`;
        } else {
          this.classToAdd = null;
        }

        this.previousUrl = currentUrlSlug;
        this.changeClasses();
      }
    });
  }

  private changeClasses() {
    if (this.classToRemove) {
      this.renderer.removeClass(document.body, this.classToRemove);
    }

    if (this.classToAdd) {
      this.renderer.addClass(document.body, this.classToAdd);
    }
  }

}
