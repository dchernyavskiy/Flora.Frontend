import {Component, Input} from '@angular/core';
import {faExclamationCircle, faXmark} from "@fortawesome/free-solid-svg-icons";
import {BehaviorSubject, Subject} from "rxjs";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  faExclamationCircle = faExclamationCircle;
  faXmark = faXmark;

  @Input() public hidden$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  @Input() public message: string = 'Message';
}
