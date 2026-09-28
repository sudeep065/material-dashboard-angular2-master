import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InterviewLibraryData, InterviewQuestion, StudyStatus } from './interview.models';
import { QuestionService } from './question.service';
import { StudyProgressService } from './study-progress.service';

@Component({
  selector: 'app-answer-reader',
  templateUrl: './answer-reader.component.html',
  styleUrls: ['./answer-reader.component.css']
})
export class AnswerReaderComponent implements OnInit {
  question: InterviewQuestion;
  categoryName = '';
  bookmarked = false;
  status: StudyStatus = 'new';
  errorMessage = '';
  previousId: string | null = null;
  nextId: string | null = null;
  copiedSection = -1;
  private library: InterviewLibraryData;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService,
    private progress: StudyProgressService
  ) { }

  ngOnInit(): void {
    this.questionService.getLibrary().subscribe(library => {
      this.library = library;
      this.route.paramMap.subscribe(params => this.selectQuestion(params.get('questionId')));
      this.route.parent.queryParamMap.subscribe(() => this.updateNeighbors());
    }, () => this.errorMessage = 'The interview library content could not be loaded. Please refresh and try again.');
  }

  selectQuestion(id: string): void {
    this.question = this.library.questions.find(item => item.id === id);
    if (!this.question) {
      this.errorMessage = 'That question could not be found. It may have been removed from this library.';
      this.categoryName = '';
      this.updateNeighbors();
      return;
    }
    this.errorMessage = '';
    this.categoryName = (this.library.categories.find(category => category.id === this.question.categoryId) || { name: 'Interview' }).name;
    this.progress.setLastQuestion(this.question.id);
    this.refreshProgress();
    this.updateNeighbors();
  }

  refreshProgress(): void {
    if (!this.question) { return; }
    this.bookmarked = this.progress.isBookmarked(this.question.id);
    this.status = this.progress.statusFor(this.question.id);
  }

  toggleBookmark(): void {
    if (!this.question) { return; }
    this.progress.toggleBookmark(this.question.id);
    this.refreshProgress();
  }

  setStatus(status: StudyStatus): void {
    if (!this.question) { return; }
    this.progress.setStatus(this.question.id, status);
    this.refreshProgress();
  }

  navigateQuestion(id: string): void {
    this.router.navigate(['../', id], {
      relativeTo: this.route,
      queryParams: this.route.parent.snapshot.queryParams
    });
  }

  backToResults(): void {
    this.router.navigate(['../'], {
      relativeTo: this.route,
      queryParams: this.route.parent.snapshot.queryParams
    });
  }

  copyCode(content: string, index: number): void {
    const clipboard = (navigator as any).clipboard;
    if (clipboard && clipboard.writeText) {
      clipboard.writeText(content).then(() => this.copiedSection = index, () => this.copyFallback(content, index));
      return;
    }
    this.copyFallback(content, index);
  }

  private copyFallback(content: string, index: number): void {
    const field = document.createElement('textarea');
    field.value = content;
    field.setAttribute('aria-hidden', 'true');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    try {
      if (document.execCommand('copy')) { this.copiedSection = index; }
    } finally {
      document.body.removeChild(field);
    }
  }

  private updateNeighbors(): void {
    if (!this.library || !this.question) {
      this.previousId = null;
      this.nextId = null;
      return;
    }
    const query = this.route.parent.snapshot.queryParamMap;
    const results = this.questionService.search(this.library.questions, {
      query: query.get('q') || '',
      categoryId: query.get('category') || '',
      bookmarkedOnly: query.get('bookmarked') === '1',
      status: query.get('status') || ''
    }, this.progress.snapshot());
    const index = results.findIndex(item => item.id === this.question.id);
    this.previousId = index > 0 ? results[index - 1].id : null;
    this.nextId = index >= 0 && index < results.length - 1 ? results[index + 1].id : null;
  }
}
