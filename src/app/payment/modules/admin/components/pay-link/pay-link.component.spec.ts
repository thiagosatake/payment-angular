import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayLinkComponent } from './pay-link.component';

describe('PayLinkComponent', () => {
  let component: PayLinkComponent;
  let fixture: ComponentFixture<PayLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
