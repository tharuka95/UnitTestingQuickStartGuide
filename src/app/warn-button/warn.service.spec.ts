/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WarnService } from './warn.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Warn', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [WarnService]
    });
  });

  it('should ...', inject([WarnService], (service: WarnService) => {
    expect(service).toBeTruthy();
  }));
});
