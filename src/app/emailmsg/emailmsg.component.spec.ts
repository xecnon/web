import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailmsgComponent } from './emailmsg.component';

describe('EmailmsgComponent', () => {
  let component: EmailmsgComponent;
  let fixture: ComponentFixture<EmailmsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailmsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
