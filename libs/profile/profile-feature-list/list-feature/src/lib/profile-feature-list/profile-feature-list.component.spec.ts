import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileFeatureListComponent } from './profile-feature-list.component';

describe('ProfileFeatureListComponent', () => {
  let component: ProfileFeatureListComponent;
  let fixture: ComponentFixture<ProfileFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileFeatureListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
