import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlsDataAccessControlComponent } from './controls-data-access-control.component';

describe('ControlsDataAccessControlComponent', () => {
  let component: ControlsDataAccessControlComponent;
  let fixture: ComponentFixture<ControlsDataAccessControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlsDataAccessControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlsDataAccessControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
