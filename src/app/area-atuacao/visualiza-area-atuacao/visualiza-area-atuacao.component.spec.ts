import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaAreaAtuacaoComponent } from './visualiza-area-atuacao.component';

describe('VisualizaAreaAtuacaoComponent', () => {
  let component: VisualizaAreaAtuacaoComponent;
  let fixture: ComponentFixture<VisualizaAreaAtuacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizaAreaAtuacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizaAreaAtuacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
