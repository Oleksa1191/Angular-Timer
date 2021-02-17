import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FliptimerComponent } from './fliptimer.component';

describe('FliptimerComponent', () => {
  let component: FliptimerComponent;
  let fixture: ComponentFixture<FliptimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FliptimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FliptimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
