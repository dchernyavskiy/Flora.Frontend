import {Component, Input} from '@angular/core';
import {faX} from "@fortawesome/free-solid-svg-icons";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {
  @Input() public title = '';
  @Input() public hidden$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  faX = faX;
}
