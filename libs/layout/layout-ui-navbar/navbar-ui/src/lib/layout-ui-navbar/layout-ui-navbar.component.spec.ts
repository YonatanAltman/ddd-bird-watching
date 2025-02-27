import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutUiNavbarComponent } from './layout-ui-navbar.component';

describe('LayoutUiNavbarComponent', () => {
  let component: LayoutUiNavbarComponent;
  let fixture: ComponentFixture<LayoutUiNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutUiNavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutUiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
