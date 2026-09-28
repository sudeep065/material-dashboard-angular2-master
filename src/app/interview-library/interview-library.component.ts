import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { InterviewCategory, InterviewFilters, InterviewLibraryData, InterviewQuestion } from './interview.models';
import { PracticeSessionService } from './practice-session.service';
import { QuestionService } from './question.service';
import { StudyProgressService } from './study-progress.service';

@Component({
  selector: 'app-interview-library',
  templateUrl: './interview-library.component.html',
  styleUrls: ['./interview-library.component.css']
})
export class InterviewLibraryComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  categories: InterviewCategory[] = [];
  questions: InterviewQuestion[] = [];
  results: InterviewQuestion[] = [];
  filters: InterviewFilters = { query: '', categoryId: '', bookmarkedOnly: false, status: '' };
  activeQuestionId = '';
  loading = true;
  loadError = '';
  showPracticeEmpty = false;
  lastQuestionId: string | null = null;

  get routeChildIsPractice(): boolean {
    return !!(this.route.firstChild && this.route.firstChild.routeConfig &&
      this.route.firstChild.routeConfig.path === 'practice');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService,
    private progress: StudyProgressService,
    private practiceSession: PracticeSessionService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.questionService.getLibrary().subscribe((library: InterviewLibraryData) => {
      this.categories = library.categories;
      this.questions = library.questions;
      this.progress.retainKnownQuestions(this.questions);
      this.loading = false;
      this.applyFilters();
      this.lastQuestionId = this.progress.getLastQuestionId();
      this.syncFromUrl();
    }, () => {
      this.loading = false;
      this.loadError = 'The question library could not be loaded. Please refresh the page or run the content import script.';
    });
    this.route.queryParamMap.subscribe(() => this.syncFromUrl());
    this.progress.changes$.subscribe(() => {
      this.lastQuestionId = this.progress.getLastQuestionId();
      this.applyFilters();
    });
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(() => {
      this.refreshActiveSelection();
      this.changeDetector.detectChanges();
    });
    this.refreshActiveSelection();
  }

  @HostListener('document:keydown', ['$event'])
  focusSearchShortcut(event: KeyboardEvent): void {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      if (this.searchInput) { this.searchInput.nativeElement.focus(); }
    }
  }

  filterChanged(): void {
    this.showPracticeEmpty = false;
    this.applyFilters();
    this.updateUrl();
  }

  clearFilters(): void {
    this.filters = { query: '', categoryId: '', bookmarkedOnly: false, status: '' };
    this.showPracticeEmpty = false;
    this.applyFilters();
    this.updateUrl();
  }

  startPractice(): void {
    if (!this.results.length) {
      this.showPracticeEmpty = true;
      return;
    }
    this.showPracticeEmpty = false;
    this.practiceSession.start(this.results.map(question => question.id));
    this.router.navigate(['practice'], { relativeTo: this.route, queryParams: this.route.snapshot.queryParams });
  }

  continueStudying(): void {
    if (!this.lastQuestionId || !this.questions.some(question => question.id === this.lastQuestionId)) { return; }
    this.router.navigate([this.lastQuestionId], {
      relativeTo: this.route,
      queryParams: this.route.snapshot.queryParams
    });
  }

  categoryName(categoryId: string): string {
    const category = this.categories.find(item => item.id === categoryId);
    return category ? category.name : 'Interview';
  }

  statusFor(questionId: string): string {
    return this.progress.statusFor(questionId);
  }

  private syncFromUrl(): void {
    if (!this.route.snapshot) { return; }
    const params = this.route.snapshot.queryParamMap;
    this.filters = {
      query: params.get('q') || '',
      categoryId: params.get('category') || '',
      bookmarkedOnly: params.get('bookmarked') === '1',
      status: params.get('status') || ''
    };
    this.applyFilters();
  }

  private applyFilters(): void {
    if (!this.questions.length) { this.results = []; return; }
    this.results = this.questionService.search(this.questions, this.filters, this.progress.snapshot());
  }

  private updateUrl(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        q: this.filters.query || null,
        category: this.filters.categoryId || null,
        bookmarked: this.filters.bookmarkedOnly ? '1' : null,
        status: this.filters.status || null
      },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }

  private refreshActiveSelection(): void {
    const child = this.route.firstChild;
    this.activeQuestionId = child && child.routeConfig && child.routeConfig.path !== 'practice'
      ? child.snapshot.paramMap.get('questionId') || ''
      : '';
  }
}
