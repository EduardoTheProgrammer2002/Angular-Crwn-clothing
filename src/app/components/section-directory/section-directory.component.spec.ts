import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDirectoryComponent } from './section-directory.component';

describe('SectionDirectoryComponent', () => {
  let component: SectionDirectoryComponent;
  let fixture: ComponentFixture<SectionDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
