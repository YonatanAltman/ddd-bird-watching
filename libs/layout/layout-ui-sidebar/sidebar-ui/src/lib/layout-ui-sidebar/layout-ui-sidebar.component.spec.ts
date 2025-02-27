import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutUiSidebarComponent } from './layout-ui-sidebar.component';

describe('LayoutUiSidebarComponent', () => {
  let component: LayoutUiSidebarComponent;
  let fixture: ComponentFixture<LayoutUiSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutUiSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutUiSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
