import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'uber-feature-table-uber-feature-table',
  imports: [CommonModule],
  templateUrl: './uber-feature-table.component.html',
  styleUrl: './uber-feature-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UberFeatureTableComponent {}
