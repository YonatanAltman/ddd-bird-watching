import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileUiImageComponent } from './profile-ui-image.component';

describe('ProfileUiImageComponent', () => {
  let component: ProfileUiImageComponent;
  let fixture: ComponentFixture<ProfileUiImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileUiImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileUiImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
