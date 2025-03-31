import { Component, EventEmitter, input, output, Output } from '@angular/core';
import { SubButtonComponent } from './sub-button/sub-button.component';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="signalClicked.emit()">{{ label() }}</button>
    <app-sub-button />
  `,
  imports: [SubButtonComponent],
  standalone: true,
})
export class SimpleButtonComponent {
  @Output() clicked = new EventEmitter<void>();
  signalClicked = output();
  label = input('click me');
}