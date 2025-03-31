import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileUiImageComponent } from '@bw/profile/image-ui';
import { SimpleButtonComponent } from './button/button.component';
import { SubButtonComponent } from './button/sub-button/sub-button.component';

@Component({
  imports: [
    RouterModule,
    ProfileUiImageComponent,
    SimpleButtonComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bird-watching';
}
