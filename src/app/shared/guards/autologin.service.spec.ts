import { TestBed } from '@angular/core/testing';

import { AutologinService } from './autologin.service';

describe('AutologinService', () => {
  let service: AutologinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutologinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
