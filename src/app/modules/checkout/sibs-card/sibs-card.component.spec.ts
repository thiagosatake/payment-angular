import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SibsCardComponent } from './sibs-card.component';

describe('SibsComponent', () => {
  let component: SibsCardComponent;
  let fixture: ComponentFixture<SibsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SibsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SibsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
