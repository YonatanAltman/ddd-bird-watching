import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-ui-button-shared-ui-button',
  imports: [CommonModule],
  templateUrl: './shared-ui-button.component.html',
  styleUrl: './shared-ui-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedUiButtonComponent {}
