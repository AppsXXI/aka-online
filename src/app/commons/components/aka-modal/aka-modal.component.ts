import { Component, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'aka-modal',
  templateUrl: './aka-modal.component.html',
  styleUrls: ['./aka-modal.component.scss']
})
export class AkaModalComponent {

  public template: TemplateRef<any>;
  public opened: boolean = false;
  public size: string = 'lg';
  public classes: any = [];

  public open(template: TemplateRef<any>) {
    this.template = template;
    this.opened = true;
  }

  public close() {
    this.opened = false;
  }
  
  public set(settings: any) {
    if (settings.size) {
      this.size = settings.size;
    }

    if (settings.classes) {
      this.classes = settings.classes;
    }
  }
  
}