import { Component, ViewChild, TemplateRef } from "@angular/core";
import { AkaModalComponent } from "../aka-modal/aka-modal.component";
import { AkaBasicsService } from "../../services/aka-basics.service";
import { CONSTANTS } from "../../../app-constants";

@Component({
  selector: 'aka-modals',
  templateUrl: './aka-modals.component.html',
  styleUrls: ['./aka-modals.component.scss']
})
export class AkaModalsComponent {
  @ViewChild('akamodal')
  private akamodal: AkaModalComponent;

  @ViewChild('akalogin')
  private akalogin: TemplateRef<any>;

  constructor(
    private basics: AkaBasicsService
  ) {}
  
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
}