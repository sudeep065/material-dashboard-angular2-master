import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InterviewCategory, InterviewQuestion } from './interview.models';
import { PracticeSessionService } from './practice-session.service';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-interview-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  question: InterviewQuestion;
  categories: InterviewCategory[] = [];
  answerRevealed = false;
  total = 0;
  position = 0;
  completed = false;
  missingSession = false;
  summary = { total: 0, needsReview: 0, confident: 0 };
  private questions: InterviewQuestion[] = [];

  constructor(
    private questionService: QuestionService,
    private session: PracticeSessionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.questionService.getLibrary().subscribe(library => {
      this.questions = library.questions;
      this.categories = library.categories;
      this.refresh();
    }, () => this.missingSession = true);
  }

  revealAnswer(): void {
    this.session.reveal();
    this.refresh();
  }

  assess(status: 'needs-review' | 'confident'): void {
    this.session.assess(status);
    this.refresh();
  }

  backToResults(): void {
    this.router.navigate(['../'], {
      relativeTo: this.route,
      queryParams: this.route.parent.snapshot.queryParams
    });
  }

  categoryName(id: string): string {
    const category = this.categories.find(item => item.id === id);
    return category ? category.name : 'Interview';
  }

  private refresh(): void {
    this.question = this.session.current(this.questions);
    this.position = this.session.getPosition();
    this.total = this.session.getTotal();
    this.answerRevealed = this.session.isRevealed();
    this.completed = this.session.isCompleted();
    this.missingSession = !this.session.hasSession();
    if (this.completed) { this.summary = this.session.summary(); }
  }
}
