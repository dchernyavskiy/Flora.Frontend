import {Component, ContentChild, Input} from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input('title') title: string = '';
  // @ts-ignore
  @Input('icon') icon: IconDefinition;
  @Input('innerHtml') innerHtml: string = '';
  @Input('active') active: boolean = false;
  // @ts-ignore
  @Input('link') link: string[];
}
