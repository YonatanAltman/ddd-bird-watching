import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'layout-ui-list-layout-ui-list',
  imports: [CommonModule],
  templateUrl: './layout-ui-list.component.html',
  styleUrl: './layout-ui-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutUiListComponent {}
