import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowderpesticidesComponent } from './powderpesticides.component';

describe('PowderpesticidesComponent', () => {
  let component: PowderpesticidesComponent;
  let fixture: ComponentFixture<PowderpesticidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowderpesticidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowderpesticidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
