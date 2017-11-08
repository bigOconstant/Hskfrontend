import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HskLandingComponent } from './hsk-landing.component';

describe('HskLandingComponent', () => {
  let component: HskLandingComponent;
  let fixture: ComponentFixture<HskLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HskLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HskLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
