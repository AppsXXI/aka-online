import { Component, Input } from "@angular/core";

@Component({
  selector: 'aka-course-card',
  templateUrl: './aka-course-card.component.html',
  styleUrls: ['./aka-course-card.component.scss']
})
export class AkaCourseCardComponent {

  @Input('approved')
  public approved: boolean;
  @Input('marked')
  public marked: boolean;
  @Input('title')
  public title: string;
  @Input('icon')
  public icon: string;
  @Input('brief')
  public brief: string;
  @Input('difficult')
  public difficult: number;
  @Input('rating')
  public rating: number;
  @Input('is-free')
  public isFree: boolean;
  @Input('is-started')
  public isStarted: boolean;
  @Input('coverage')
  public coverage: number;
  @Input('teachers')
  public teachers: any[];

}