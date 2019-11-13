import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceacademyComponent } from './danceacademy.component';

describe('DanceacademyComponent', () => {
  let component: DanceacademyComponent;
  let fixture: ComponentFixture<DanceacademyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceacademyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceacademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
