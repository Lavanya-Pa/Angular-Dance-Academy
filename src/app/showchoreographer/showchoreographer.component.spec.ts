import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowchoreographerComponent } from './showchoreographer.component';

describe('ShowchoreographerComponent', () => {
  let component: ShowchoreographerComponent;
  let fixture: ComponentFixture<ShowchoreographerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowchoreographerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowchoreographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
