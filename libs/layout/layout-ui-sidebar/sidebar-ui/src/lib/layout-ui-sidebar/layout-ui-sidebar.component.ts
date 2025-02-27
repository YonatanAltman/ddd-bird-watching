import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'layout-ui-sidebar-layout-ui-sidebar',
  imports: [CommonModule],
  templateUrl: './layout-ui-sidebar.component.html',
  styleUrl: './layout-ui-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutUiSidebarComponent {}
