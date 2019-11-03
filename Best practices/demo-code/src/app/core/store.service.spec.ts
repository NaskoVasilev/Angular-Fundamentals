import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';

describe('StoreService', () => {
  let service: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(StoreService);
  });

  it('should be created', () => {
    const service: StoreService = TestBed.get(StoreService);
    expect(service).toBeTruthy();
  });

  it('should set the initial state', (done: DoneFn) => {
    service.select(state => state).subscribe(state => {
      expect(state).toEqual({ userList: [] });
    });
    done();
  })

  it('should update the userList', (done: DoneFn) => {
    const newUserList = [{firstName: 'test', lastName: 'testtest'}];
    service.update(state => ({userList: newUserList}));
    service.select(state => state.userList).subscribe(userList => {
      expect(userList).toEqual(newUserList);
    })
    done();
  });
});
