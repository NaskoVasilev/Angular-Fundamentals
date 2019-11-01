import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureUserComponent } from './furniture-user.component';

describe('FurnitureUserComponent', () => {
  let component: FurnitureUserComponent;
  let fixture: ComponentFixture<FurnitureUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnitureUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
