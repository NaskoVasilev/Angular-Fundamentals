import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFurnitureComponent } from './delete-furniture.component';

describe('DeleteFurnitureComponent', () => {
  let component: DeleteFurnitureComponent;
  let fixture: ComponentFixture<DeleteFurnitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFurnitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
