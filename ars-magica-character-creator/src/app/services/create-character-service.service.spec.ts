import { TestBed } from '@angular/core/testing';

import { CreateCharacterServiceService } from './create-character-service.service';

describe('CreateCharacterServiceService', () => {
  let service: CreateCharacterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCharacterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
