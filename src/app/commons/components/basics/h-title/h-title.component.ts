import { Component, Input } from "@angular/core";

@Component({
  selector: 'h-title',
  templateUrl: './h-title.component.html',
  styleUrls: ['./h-title.component.scss']
})
export class HTitleComponent {
  @Input('level')
  private level: string;
}