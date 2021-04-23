import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayLinkCardComponent } from './pay-link-card.component';

describe('PayLinkCardComponent', () => {
  let component: PayLinkCardComponent;
  let fixture: ComponentFixture<PayLinkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayLinkCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayLinkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
