import { TestBed } from '@angular/core/testing';

import { MiniCardService } from './mini-card.service';

describe('MiniCardService', () => {
  let service: MiniCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
