import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'layout-ui-navbar-layout-ui-navbar',
  imports: [CommonModule],
  templateUrl: './layout-ui-navbar.component.html',
  styleUrl: './layout-ui-navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutUiNavbarComponent {}
