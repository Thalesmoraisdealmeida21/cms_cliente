import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaAreaAtuacaoComponent } from './pesquisa-area-atuacao.component';

describe('PesquisaAreaAtuacaoComponent', () => {
  let component: PesquisaAreaAtuacaoComponent;
  let fixture: ComponentFixture<PesquisaAreaAtuacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaAreaAtuacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaAreaAtuacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
