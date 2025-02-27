import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutFeatureUserComponent } from './layout-feature-user.component';

describe('LayoutFeatureUserComponent', () => {
  let component: LayoutFeatureUserComponent;
  let fixture: ComponentFixture<LayoutFeatureUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutFeatureUserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutFeatureUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
