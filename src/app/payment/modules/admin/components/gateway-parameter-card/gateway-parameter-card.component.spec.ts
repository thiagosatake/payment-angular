import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayParameterCardComponent } from './gateway-parameter-card.component';

describe('GatewayParameterCardComponent', () => {
  let component: GatewayParameterCardComponent;
  let fixture: ComponentFixture<GatewayParameterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayParameterCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayParameterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
