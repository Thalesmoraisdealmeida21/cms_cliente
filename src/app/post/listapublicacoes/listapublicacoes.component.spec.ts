import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapublicacoesComponent } from './listapublicacoes.component';

describe('ListapublicacoesComponent', () => {
  let component: ListapublicacoesComponent;
  let fixture: ComponentFixture<ListapublicacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListapublicacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapublicacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
