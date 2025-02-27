import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardFeatureMainComponent } from './dashboard-feature-main.component';

describe('DashboardFeatureMainComponent', () => {
  let component: DashboardFeatureMainComponent;
  let fixture: ComponentFixture<DashboardFeatureMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardFeatureMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardFeatureMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
