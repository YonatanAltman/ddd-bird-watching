import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileUiImageComponent } from '@bw/profile/image-ui';

@Component({
  imports: [RouterModule, ProfileUiImageComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bird-watching';
}
