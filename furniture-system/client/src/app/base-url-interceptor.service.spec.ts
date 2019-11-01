import { TestBed, inject } from '@angular/core/testing';

import { BaseUrlInterceptorService } from './base-url-interceptor.service';

describe('BaseUrlInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseUrlInterceptorService]
    });
  });

  it('should be created', inject([BaseUrlInterceptorService], (service: BaseUrlInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
