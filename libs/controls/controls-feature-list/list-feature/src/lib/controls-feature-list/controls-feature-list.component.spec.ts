import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlsFeatureListComponent } from './controls-feature-list.component';

describe('ControlsFeatureListComponent', () => {
  let component: ControlsFeatureListComponent;
  let fixture: ComponentFixture<ControlsFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlsFeatureListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlsFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
