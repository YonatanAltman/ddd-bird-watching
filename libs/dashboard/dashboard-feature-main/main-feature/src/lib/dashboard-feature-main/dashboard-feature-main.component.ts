import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dashboard-feature-main-dashboard-feature-main',
  imports: [CommonModule],
  templateUrl: './dashboard-feature-main.component.html',
  styleUrl: './dashboard-feature-main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardFeatureMainComponent {}
