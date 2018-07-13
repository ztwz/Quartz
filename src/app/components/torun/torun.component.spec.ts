import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorunComponent } from './torun.component';

describe('TorunComponent', () => {
  let component: TorunComponent;
  let fixture: ComponentFixture<TorunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
