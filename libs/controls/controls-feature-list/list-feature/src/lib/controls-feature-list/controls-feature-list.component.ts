import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'controls-feature-list-controls-feature-list',
  imports: [],
  templateUrl: './controls-feature-list.component.html',
  styleUrl: './controls-feature-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlsFeatureListComponent {

  list = [
    'aaa',
    'aab',
    'aad',
    'asa',
    'afa',
    'aaa',
    'aaa',
    'aaa',
  ]
}
