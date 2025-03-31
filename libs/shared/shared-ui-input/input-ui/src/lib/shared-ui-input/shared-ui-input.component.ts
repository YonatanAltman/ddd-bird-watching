import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-ui-input-shared-ui-input',
  imports: [CommonModule],
  templateUrl: './shared-ui-input.component.html',
  styleUrl: './shared-ui-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedUiInputComponent {}
