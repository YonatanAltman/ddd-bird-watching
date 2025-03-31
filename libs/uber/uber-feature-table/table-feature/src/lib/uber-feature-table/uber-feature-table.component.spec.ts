import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UberFeatureTableComponent } from './uber-feature-table.component';

describe('UberFeatureTableComponent', () => {
  let component: UberFeatureTableComponent;
  let fixture: ComponentFixture<UberFeatureTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UberFeatureTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UberFeatureTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
