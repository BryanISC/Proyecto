import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarEmailDeConfirmacionComponent } from './enviar-email-de-confirmacion.component';

describe('EnviarEmailDeConfirmacionComponent', () => {
  let component: EnviarEmailDeConfirmacionComponent;
  let fixture: ComponentFixture<EnviarEmailDeConfirmacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarEmailDeConfirmacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarEmailDeConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
