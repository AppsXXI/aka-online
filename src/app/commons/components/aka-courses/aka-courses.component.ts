import { Component, Input } from "@angular/core";

@Component({
  selector: 'aka-courses',
  templateUrl: './aka-courses.component.html',
  styleUrls: ['./aka-courses.component.scss']
})
export class AkaCoursesComponent {

  @Input('courses')
  public courses: any[];
  
}