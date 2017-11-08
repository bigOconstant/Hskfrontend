import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hsk2VocabularyComponent } from './hsk2-vocabulary.component';

describe('Hsk2VocabularyComponent', () => {
  let component: Hsk2VocabularyComponent;
  let fixture: ComponentFixture<Hsk2VocabularyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hsk2VocabularyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hsk2VocabularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
