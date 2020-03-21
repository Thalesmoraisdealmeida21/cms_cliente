import { TestBed } from '@angular/core/testing';

import { AreaAtuacaoServiceService } from './area-atuacao-service.service';

describe('AreaAtuacaoServiceService', () => {
  let service: AreaAtuacaoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaAtuacaoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
