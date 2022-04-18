import { TestBed } from '@angular/core/testing';

import { UserRequestService } from './user-request.service';

describe('UserResquestService', () => {
  let service: UserRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
