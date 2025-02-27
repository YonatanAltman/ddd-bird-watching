import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileFeaturePageComponent } from './profile-feature-page.component';

describe('ProfileFeaturePageComponent', () => {
  let component: ProfileFeaturePageComponent;
  let fixture: ComponentFixture<ProfileFeaturePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileFeaturePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileFeaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
