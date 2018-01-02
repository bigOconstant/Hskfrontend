import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HskHomeComponent } from './hsk-home.component';

describe('HskHomeComponent', () => {
  let component: HskHomeComponent;
  let fixture: ComponentFixture<HskHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HskHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HskHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
