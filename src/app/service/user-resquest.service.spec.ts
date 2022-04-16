import { TestBed } from '@angular/core/testing';

import { UserResquestService } from './user-resquest.service';

describe('UserResquestService', () => {
  let service: UserResquestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserResquestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
