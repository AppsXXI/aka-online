import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AkaBasicsService {

  // private modalContent: any;
  private modalSubject: BehaviorSubject<any> = new BehaviorSubject({modal: null, shown: false});

  public openModal(modalKey: string) {
    this.modalSubject.next({modal: modalKey, shown: true});
  }

  public closeModal(modalKey: string) {
    this.modalSubject.next({modal: modalKey, shown: false});
  }

  public onModal(): Observable<boolean> {
    return this.modalSubject.asObservable();
  }

}