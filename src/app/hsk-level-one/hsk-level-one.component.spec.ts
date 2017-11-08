import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HskLevelOneComponent } from './hsk-level-one.component';

describe('HskLevelOneComponent', () => {
  let component: HskLevelOneComponent;
  let fixture: ComponentFixture<HskLevelOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HskLevelOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HskLevelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
