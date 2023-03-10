import {Component, Input} from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {fa0} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() title = '';
  @Input() icon: IconDefinition = fa0;
  @Input() innerHtml = '';
  @Input() active = false;
  @Input() link: string[] = [];
}
