import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CedictLandingComponent } from './cedict-landing.component';

describe('CedictLandingComponent', () => {
  let component: CedictLandingComponent;
  let fixture: ComponentFixture<CedictLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CedictLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CedictLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
