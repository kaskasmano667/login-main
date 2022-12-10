import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevohackComponent } from './nuevohack.component';

describe('NuevohackComponent', () => {
  let component: NuevohackComponent;
  let fixture: ComponentFixture<NuevohackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevohackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevohackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
