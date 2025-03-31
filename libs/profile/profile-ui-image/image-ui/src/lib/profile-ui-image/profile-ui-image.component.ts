import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@bw/auth/user-data-access';
import { ListItem } from '@bw/shared/list-data-access';

@Component({
  selector: 'profile-ui-image-profile-ui-image',
  imports: [CommonModule],
  templateUrl: './profile-ui-image.component.html',
  styleUrl: './profile-ui-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileUiImageComponent {
  // user:User;
  list:ListItem[] = [];
}
