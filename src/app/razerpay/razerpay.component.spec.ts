import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazerpayComponent } from './razerpay.component';

describe('RazerpayComponent', () => {
  let component: RazerpayComponent;
  let fixture: ComponentFixture<RazerpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazerpayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazerpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
