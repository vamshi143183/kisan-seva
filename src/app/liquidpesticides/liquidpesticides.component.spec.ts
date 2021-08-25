import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidpesticidesComponent } from './liquidpesticides.component';

describe('LiquidpesticidesComponent', () => {
  let component: LiquidpesticidesComponent;
  let fixture: ComponentFixture<LiquidpesticidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidpesticidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidpesticidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
