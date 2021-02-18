import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplisticTimerComponent } from './simplistic-timer.component';

describe('SimplisticTimerComponent', () => {
  let component: SimplisticTimerComponent;
  let fixture: ComponentFixture<SimplisticTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplisticTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplisticTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
