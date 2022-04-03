import { TestBed } from '@angular/core/testing';

import { WayptService } from './waypt.service';

describe('WayptService', () => {
  let service: WayptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WayptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
