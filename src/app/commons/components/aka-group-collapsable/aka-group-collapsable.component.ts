import { Component, Input } from "@angular/core";

@Component({
  selector: 'aka-group-collapsable',
  templateUrl: './aka-group-collapsable.component.html',
  styleUrls: ['./aka-group-collapsable.component.scss']
})
export class AkaGroupCollapsable {
  @Input('group')
  public group: any;

  public collapsed: boolean = false;
}