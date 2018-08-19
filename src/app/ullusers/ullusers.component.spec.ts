import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UllusersComponent } from './ullusers.component';

describe('UllusersComponent', () => {
  let component: UllusersComponent;
  let fixture: ComponentFixture<UllusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UllusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UllusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
