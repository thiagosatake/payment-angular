import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareCheckoutComponent } from './prepare-checkout.component';

describe('PrepareCheckoutComponent', () => {
  let component: PrepareCheckoutComponent;
  let fixture: ComponentFixture<PrepareCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepareCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
