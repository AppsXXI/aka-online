import { Component, OnInit, Renderer2, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AkaModalComponent } from './commons/components/aka-modal/aka-modal.component';
import { AkaBasicsService } from './commons/services/aka-basics.service';
import { AkaLoginComponent } from './commons/components/aka-login/aka-login.component';
import { CONSTANTS } from './app-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('akamodal')
  private akamodal: AkaModalComponent;

  @ViewChild('akalogin')
  private akalogin: TemplateRef<any>;

  private previousUrl: string;
  private classPrefix: string = 'path-rule-';
  private classToAdd: string;
  private classToRemove: string;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private basics: AkaBasicsService
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

  ngOnInit() {
    // 
  }

  ngAfterViewInit() {
    this.basics.onModal().subscribe((modal: any) => {
      let modalTemplate: TemplateRef<any>;

      switch(modal.modal) {
        case CONSTANTS.MODALS.LOGIN:
          modalTemplate = this.akalogin;
          break;
      }
      
      if (modal.shown) {
        this.akamodal.set({
          size: 'fs',
          classes: ['fullscreen']
        });

        this.akamodal.open(modalTemplate);
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
