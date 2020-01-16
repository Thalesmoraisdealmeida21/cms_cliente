import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovapublicacaoComponent } from './novapublicacao.component';

describe('NovapublicacaoComponent', () => {
  let component: NovapublicacaoComponent;
  let fixture: ComponentFixture<NovapublicacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovapublicacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovapublicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
