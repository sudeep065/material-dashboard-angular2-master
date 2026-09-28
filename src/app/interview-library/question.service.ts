import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { shareReplay } from 'rxjs/operators';
import {
  InterviewFilters,
  InterviewLibraryData,
  InterviewQuestion,
  StudyProgress
} from './interview.models';

@Injectable({ providedIn: 'root' })
export class QuestionService {
  private library$: Observable<InterviewLibraryData>;

  constructor(private http: HttpClient) {
    this.library$ = http.get<InterviewLibraryData>('assets/data/interview-questions.json').pipe(shareReplay(1));
  }

  getLibrary(): Observable<InterviewLibraryData> {
    return this.library$;
  }

  search(
    questions: InterviewQuestion[],
    filters: InterviewFilters,
    progress: StudyProgress
  ): InterviewQuestion[] {
    const query = filters.query.trim().toLocaleLowerCase();
    const bookmarked = new Set(progress.bookmarks);

    return questions
      .map((question, index) => {
        const titleMatch = question.title.toLocaleLowerCase().includes(query);
        const wordingMatch = question.variants.some(variant => variant.wording.toLocaleLowerCase().includes(query));
        const tagMatch = question.tags.some(tag => tag.toLocaleLowerCase().includes(query));
        const bodyMatch = question.sections.some(section => section.content.toLocaleLowerCase().includes(query));
        const matchesText = !query || titleMatch || wordingMatch || tagMatch || bodyMatch;
        const matchesCategory = !filters.categoryId || question.categoryId === filters.categoryId;
        const matchesBookmark = !filters.bookmarkedOnly || bookmarked.has(question.id);
        const status = progress.statuses[question.id] || 'new';
        const matchesStatus = !filters.status || status === filters.status;
        let rank = 3;
        if (titleMatch) { rank = 0; }
        if (wordingMatch || tagMatch) { rank = Math.min(rank, 1); }
        if (bodyMatch) { rank = Math.min(rank, 2); }

        return { question, index, rank, matchesText, matchesCategory, matchesBookmark, matchesStatus };
      })
      .filter(item => item.matchesText && item.matchesCategory && item.matchesBookmark && item.matchesStatus)
      .sort((left, right) => left.rank - right.rank || left.index - right.index)
      .map(item => item.question);
  }
}
