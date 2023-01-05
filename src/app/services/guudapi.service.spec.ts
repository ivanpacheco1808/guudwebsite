import { TestBed } from '@angular/core/testing';

import { GuudapiService } from './guudapi.service';

describe('GuudapiService', () => {
  let service: GuudapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuudapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
