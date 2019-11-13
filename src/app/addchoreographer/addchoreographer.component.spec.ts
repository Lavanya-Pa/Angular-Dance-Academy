import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchoreographerComponent } from './addchoreographer.component';

describe('AddchoreographerComponent', () => {
  let component: AddchoreographerComponent;
  let fixture: ComponentFixture<AddchoreographerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddchoreographerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddchoreographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
