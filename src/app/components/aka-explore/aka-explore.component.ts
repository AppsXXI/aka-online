import { Component } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { CONSTANTS } from "../../app-constants";

@Component({
  selector: 'aka-explore',
  templateUrl: './aka-explore.component.html',
  styleUrls: ['./aka-explore.component.scss']
})
export class AkaExploreComponent {
  
  constructor(
    private router: Router
  ) {
    this.redirectFromExplorer(this.router.url);

    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.redirectFromExplorer(event.url);
      }
    })
  }

  redirectFromExplorer(url: string): void {
    if (url == `/${CONSTANTS.ROUTES.EXPLORE.URL}`) {
      this.router.navigate([`/${CONSTANTS.ROUTES.EXPLORE.CATEGORY.FULL_URL}`]);
    }
  }
  
}