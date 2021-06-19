import { TestBed } from '@angular/core/testing';

import { AjudaAPIService } from './ajuda-api.service';

describe('AjudaAPIService', () => {
  let service: AjudaAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjudaAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
