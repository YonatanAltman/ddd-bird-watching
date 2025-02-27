import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'layout-feature-user-layout-feature-user',
  imports: [CommonModule],
  templateUrl: './layout-feature-user.component.html',
  styleUrl: './layout-feature-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFeatureUserComponent {}
