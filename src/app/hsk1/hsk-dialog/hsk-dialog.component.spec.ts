import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HskDialogComponent } from './hsk-dialog.component';

describe('HskDialogComponent', () => {
  let component: HskDialogComponent;
  let fixture: ComponentFixture<HskDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HskDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
