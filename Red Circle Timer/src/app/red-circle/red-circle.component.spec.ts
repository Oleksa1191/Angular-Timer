import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedCircleComponent } from './red-circle.component';

describe('RedCircleComponent', () => {
  let component: RedCircleComponent;
  let fixture: ComponentFixture<RedCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
