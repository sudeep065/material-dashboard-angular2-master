import { Injectable } from '@angular/core';
import { InterviewQuestion, StudyStatus } from './interview.models';
import { StudyProgressService } from './study-progress.service';

export interface PracticeSummary {
  total: number;
  needsReview: number;
  confident: number;
}

@Injectable({ providedIn: 'root' })
export class PracticeSessionService {
  private questionIds: string[] = [];
  private position = 0;
  private revealed = false;
  private completed = false;
  private needsReview = 0;
  private confident = 0;

  constructor(private progress: StudyProgressService) { }

  start(questionIds: string[]): void {
    this.questionIds = questionIds.slice();
    this.position = 0;
    this.revealed = false;
    this.completed = false;
    this.needsReview = 0;
    this.confident = 0;
  }

  current(questions: InterviewQuestion[]): InterviewQuestion | null {
    if (this.completed || !this.questionIds.length) { return null; }
    const id = this.questionIds[this.position];
    return questions.find(question => question.id === id) || null;
  }

  getPosition(): number { return this.position; }
  getTotal(): number { return this.questionIds.length; }
  isRevealed(): boolean { return this.revealed; }
  isCompleted(): boolean { return this.completed; }
  hasSession(): boolean { return this.questionIds.length > 0; }

  reveal(): void {
    if (this.hasSession() && !this.completed) { this.revealed = true; }
  }

  assess(status: StudyStatus): void {
    if (!this.revealed || !this.hasSession() || this.completed) { return; }
    const id = this.questionIds[this.position];
    this.progress.setStatus(id, status);
    if (status === 'needs-review') { this.needsReview++; }
    if (status === 'confident') { this.confident++; }
    this.position++;
    this.revealed = false;
    if (this.position >= this.questionIds.length) { this.completed = true; }
  }

  summary(): PracticeSummary {
    return { total: this.questionIds.length, needsReview: this.needsReview, confident: this.confident };
  }
}
