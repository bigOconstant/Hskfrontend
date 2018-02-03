import { TestBed, inject } from '@angular/core/testing';

import { LessonsServiceService } from './lessons-service.service';

describe('LessonsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LessonsServiceService]
    });
  });

  it('should be created', inject([LessonsServiceService], (service: LessonsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
