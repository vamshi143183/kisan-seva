import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MirchiComponent } from './mirchi.component';

describe('MirchiComponent', () => {
  let component: MirchiComponent;
  let fixture: ComponentFixture<MirchiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MirchiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MirchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
