import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'controls-data-access-control-controls-data-access-control',
  imports: [CommonModule],
  templateUrl: './controls-data-access-control.component.html',
  styleUrl: './controls-data-access-control.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlsDataAccessControlComponent {}
