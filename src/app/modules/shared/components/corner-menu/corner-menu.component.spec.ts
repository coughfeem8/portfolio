import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerMenuComponent } from './corner-menu.component';

describe('CornerMenuComponent', () => {
  let component: CornerMenuComponent;
  let fixture: ComponentFixture<CornerMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CornerMenuComponent]
    });
    fixture = TestBed.createComponent(CornerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
