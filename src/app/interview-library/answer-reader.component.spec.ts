import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';
import { InterviewLibraryData } from './interview.models';
import { AnswerReaderComponent } from './answer-reader.component';
import { QuestionService } from './question.service';
import { StudyProgressService } from './study-progress.service';

const library: InterviewLibraryData = {
  schemaVersion: 1,
  sourceFileName: 'interview.docx',
  categories: [{ id: 'csharp', name: 'C# and .NET' }],
  questions: [{
    id: 'Q001',
    title: 'Enumerable and queryable collections',
    categoryId: 'csharp',
    tags: [],
    variants: [{ wording: 'What is the difference?', sources: ['Source: B1'] }],
    sections: [{ type: 'paragraph', content: 'The complete explanation.' }],
    references: []
  }],
  conversionNotes: []
};

describe('AnswerReaderComponent routing', () => {
  let fixture: ComponentFixture<AnswerReaderComponent>;
  let routeStub: any;
  let routerStub: jasmine.SpyObj<Router>;
  let progress: StudyProgressService;
  let selectedId: string;

  beforeEach(() => {
    localStorage.removeItem('interview-library-progress:v1');
    selectedId = 'Q001';
    const queryParamMap = new BehaviorSubject(convertToParamMap({ category: 'csharp', q: 'queryable' }));
    routeStub = {
      paramMap: new BehaviorSubject(convertToParamMap({ questionId: selectedId })),
      parent: {
        queryParamMap,
        snapshot: { queryParamMap: convertToParamMap({ category: 'csharp', q: 'queryable' }) }
      }
    };
    routerStub = jasmine.createSpyObj<Router>('Router', ['navigate']);
    const questionService = jasmine.createSpyObj<QuestionService>('QuestionService', ['getLibrary', 'search']);
    questionService.getLibrary.and.returnValue(of(library));
    questionService.search.and.returnValue(library.questions);
    progress = new StudyProgressService();

    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [AnswerReaderComponent],
      providers: [
        { provide: ActivatedRoute, useValue: routeStub },
        { provide: Router, useValue: routerStub },
        { provide: QuestionService, useValue: questionService },
        { provide: StudyProgressService, useValue: progress }
      ]
    });
    fixture = TestBed.createComponent(AnswerReaderComponent);
    fixture.detectChanges();
  });

  it('opens a question addressed directly by its stable ID and restores it as the last read item', () => {
    expect(fixture.componentInstance.question.id).toBe('Q001');
    expect(fixture.componentInstance.categoryName).toBe('C# and .NET');
    expect(progress.getLastQuestionId()).toBe('Q001');
    expect(fixture.nativeElement.textContent).toContain('The complete explanation.');
  });

  it('shows a graceful missing-question state for an invalid direct ID', () => {
    routeStub.paramMap.next(convertToParamMap({ questionId: 'Q999' }));
    expect(fixture.componentInstance.question).toBeUndefined();
    expect(fixture.componentInstance.errorMessage).toContain('could not be found');
  });
});
