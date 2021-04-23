import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewaySearchCardComponent } from './gateway-search-card.component';

describe('GatewaySearchComponent', () => {
  let component: GatewaySearchCardComponent;
  let fixture: ComponentFixture<GatewaySearchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewaySearchCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewaySearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
