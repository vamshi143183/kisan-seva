import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestingmachineryComponent } from './harvestingmachinery.component';

describe('HarvestingmachineryComponent', () => {
  let component: HarvestingmachineryComponent;
  let fixture: ComponentFixture<HarvestingmachineryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarvestingmachineryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarvestingmachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
