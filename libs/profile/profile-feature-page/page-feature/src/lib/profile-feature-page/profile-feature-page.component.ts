import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'profile-feature-page-profile-feature-page',
  imports: [CommonModule],
  templateUrl: './profile-feature-page.component.html',
  styleUrl: './profile-feature-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileFeaturePageComponent {}
