import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faX} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {
  @Input() public title: string = '';
  @Input() public hidden: boolean = false;
  @Output() public onClosed: EventEmitter<void> = new EventEmitter<void>();
  faX = faX;

  close() {
    this.hidden = true;
    this.onClosed.emit();
  }
}
