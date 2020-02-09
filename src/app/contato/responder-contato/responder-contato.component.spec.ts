import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponderContatoComponent } from './responder-contato.component';

describe('ResponderContatoComponent', () => {
  let component: ResponderContatoComponent;
  let fixture: ComponentFixture<ResponderContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponderContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponderContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
