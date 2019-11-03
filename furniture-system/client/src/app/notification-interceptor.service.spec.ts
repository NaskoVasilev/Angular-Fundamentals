import { TestBed, inject } from '@angular/core/testing';

import { NotificationInterceptorService } from './notification-interceptor.service';

describe('NotificationInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationInterceptorService]
    });
  });

  it('should be created', inject([NotificationInterceptorService], (service: NotificationInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
