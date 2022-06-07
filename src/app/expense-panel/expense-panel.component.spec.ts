import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensePanelComponent } from './expense-panel.component';

describe('ExpensePanelComponent', () => {
  let component: ExpensePanelComponent;
  let fixture: ComponentFixture<ExpensePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
