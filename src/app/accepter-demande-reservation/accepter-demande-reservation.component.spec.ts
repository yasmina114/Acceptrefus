import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccepterDemandeReservationComponent } from './accepter-demande-reservation.component';

describe('AccepterDemandeReservationComponent', () => {
  let component: AccepterDemandeReservationComponent;
  let fixture: ComponentFixture<AccepterDemandeReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccepterDemandeReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccepterDemandeReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
