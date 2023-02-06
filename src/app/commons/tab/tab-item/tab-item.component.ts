import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent {
  @Input('title') title: string = '';
  @Input('active') active: boolean = false;
}
