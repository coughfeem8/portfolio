import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseMenuComponent } from './base-menu.component';

describe('BaseMenuComponent', () => {
  let component: BaseMenuComponent;
  let fixture: ComponentFixture<BaseMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseMenuComponent]
    });
    fixture = TestBed.createComponent(BaseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
