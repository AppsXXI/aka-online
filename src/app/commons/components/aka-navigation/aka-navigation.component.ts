import { Component } from '@angular/core';
import { AkaBasicsService } from '../../services/aka-basics.service';
import { CONSTANTS } from '../../../app-constants';

@Component({
  selector: 'aka-navigation',
  templateUrl: './aka-navigation.component.html',
  styleUrls: ['./aka-navigation.component.scss']
})
export class AkaNavigationComponent {

  constructor(
    private basics: AkaBasicsService
  ) {}

  public showLoginModal() {
    this.basics.openModal(CONSTANTS.MODALS.LOGIN);
  }

}