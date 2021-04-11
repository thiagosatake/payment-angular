import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewaySetupComponent } from './gateway-setup.component';

describe('GatewaySetupComponent', () => {
  let component: GatewaySetupComponent;
  let fixture: ComponentFixture<GatewaySetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewaySetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewaySetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
