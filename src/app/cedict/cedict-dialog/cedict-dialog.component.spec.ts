import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CedictDialogComponent } from './cedict-dialog.component';

describe('CedictDialogComponent', () => {
  let component: CedictDialogComponent;
  let fixture: ComponentFixture<CedictDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CedictDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CedictDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
