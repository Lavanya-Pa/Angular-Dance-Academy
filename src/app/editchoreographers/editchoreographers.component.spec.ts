import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditchoreographersComponent } from './editchoreographers.component';

describe('EditchoreographersComponent', () => {
  let component: EditchoreographersComponent;
  let fixture: ComponentFixture<EditchoreographersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditchoreographersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditchoreographersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
