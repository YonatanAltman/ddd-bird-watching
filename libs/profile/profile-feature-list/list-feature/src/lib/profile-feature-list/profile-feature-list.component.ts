import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'profile-feature-list-profile-feature-list',
  imports: [CommonModule],
  templateUrl: './profile-feature-list.component.html',
  styleUrl: './profile-feature-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileFeatureListComponent {}
