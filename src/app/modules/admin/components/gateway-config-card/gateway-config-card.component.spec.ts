import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayConfigCardComponent } from './gateway-config-card.component';

describe('GatewayConfigCardComponent', () => {
  let component: GatewayConfigCardComponent;
  let fixture: ComponentFixture<GatewayConfigCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayConfigCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayConfigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
