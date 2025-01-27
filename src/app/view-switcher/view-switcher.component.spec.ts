import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSwitcherComponent } from './view-switcher.component';

describe('ViewSwitcherComponent', () => {
  let component: ViewSwitcherComponent;
  let fixture: ComponentFixture<ViewSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewSwitcherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
