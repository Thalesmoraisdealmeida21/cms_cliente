import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacontatosComponent } from './listacontatos.component';

describe('ListacontatosComponent', () => {
  let component: ListacontatosComponent;
  let fixture: ComponentFixture<ListacontatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacontatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacontatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
