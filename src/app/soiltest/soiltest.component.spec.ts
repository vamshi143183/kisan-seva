import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoiltestComponent } from './soiltest.component';

describe('SoiltestComponent', () => {
  let component: SoiltestComponent;
  let fixture: ComponentFixture<SoiltestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoiltestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoiltestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
