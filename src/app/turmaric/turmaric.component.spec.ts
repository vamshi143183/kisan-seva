import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaricComponent } from './turmaric.component';

describe('TurmaricComponent', () => {
  let component: TurmaricComponent;
  let fixture: ComponentFixture<TurmaricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurmaricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
