import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { InterviewQuestion, StudyProgress, StudyStatus } from './interview.models';

const STORAGE_KEY = 'interview-library-progress:v1';

function emptyProgress(): StudyProgress {
  return { version: 1, bookmarks: [], statuses: {}, lastQuestionId: null };
}

@Injectable({ providedIn: 'root' })
export class StudyProgressService {
  private progress: StudyProgress;
  private changes = new Subject<void>();
  readonly changes$ = this.changes.asObservable();

  constructor() {
    this.progress = this.restore();
  }

  isBookmarked(questionId: string): boolean {
    return this.progress.bookmarks.indexOf(questionId) !== -1;
  }

  statusFor(questionId: string): StudyStatus {
    return this.progress.statuses[questionId] || 'new';
  }

  getLastQuestionId(): string | null {
    return this.progress.lastQuestionId;
  }

  snapshot(): StudyProgress {
    return {
      version: 1,
      bookmarks: this.progress.bookmarks.slice(),
      statuses: Object.assign({}, this.progress.statuses),
      lastQuestionId: this.progress.lastQuestionId
    };
  }

  toggleBookmark(questionId: string): void {
    const index = this.progress.bookmarks.indexOf(questionId);
    if (index === -1) {
      this.progress.bookmarks = this.progress.bookmarks.concat(questionId);
    } else {
      this.progress.bookmarks = this.progress.bookmarks.filter(id => id !== questionId);
    }
    this.persist();
  }

  setStatus(questionId: string, status: StudyStatus): void {
    this.progress.statuses[questionId] = status;
    this.persist();
  }

  setLastQuestion(questionId: string): void {
    this.progress.lastQuestionId = questionId;
    this.persist();
  }

  retainKnownQuestions(questions: InterviewQuestion[]): void {
    const known = new Set(questions.map(question => question.id));
    this.progress.bookmarks = this.progress.bookmarks.filter(id => known.has(id));
    Object.keys(this.progress.statuses).forEach(id => {
      if (!known.has(id)) { delete this.progress.statuses[id]; }
    });
    if (this.progress.lastQuestionId && !known.has(this.progress.lastQuestionId)) {
      this.progress.lastQuestionId = null;
    }
    this.persist();
  }

  private restore(): StudyProgress {
    try {
      const serialized = localStorage.getItem(STORAGE_KEY);
      if (!serialized) { return emptyProgress(); }
      const parsed = JSON.parse(serialized);
      if (!parsed || parsed.version !== 1 || !Array.isArray(parsed.bookmarks) ||
          !parsed.statuses || typeof parsed.statuses !== 'object') {
        return emptyProgress();
      }
      const statuses: { [questionId: string]: StudyStatus } = {};
      Object.keys(parsed.statuses).forEach(id => {
        const status = parsed.statuses[id];
        if (status === 'needs-review' || status === 'confident' || status === 'new') {
          statuses[id] = status;
        }
      });
      return {
        version: 1,
        bookmarks: parsed.bookmarks.filter((id: any) => typeof id === 'string'),
        statuses,
        lastQuestionId: typeof parsed.lastQuestionId === 'string' ? parsed.lastQuestionId : null
      };
    } catch (_) {
      return emptyProgress();
    }
  }

  private persist(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.progress));
    } catch (_) {
      // The feature remains usable for this session when browser storage is unavailable.
    }
    this.changes.next();
  }
}
