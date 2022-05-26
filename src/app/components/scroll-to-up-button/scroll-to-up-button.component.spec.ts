import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollToUpButtonComponent } from './scroll-to-up-button.component';

describe('ScrollToUpButtonComponent', () => {
  let component: ScrollToUpButtonComponent;
  let fixture: ComponentFixture<ScrollToUpButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollToUpButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollToUpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
