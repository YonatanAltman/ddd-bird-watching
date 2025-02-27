import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutUiListComponent } from './layout-ui-list.component';

describe('LayoutUiListComponent', () => {
  let component: LayoutUiListComponent;
  let fixture: ComponentFixture<LayoutUiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutUiListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutUiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
