import { PracticeSessionService } from './practice-session.service';
import { StudyProgressService } from './study-progress.service';
import { InterviewQuestion } from './interview.models';

describe('PracticeSessionService', () => {
  beforeEach(() => localStorage.removeItem('interview-library-progress:v1'));

  it('keeps answers hidden until reveal, records assessments, and completes the session', () => {
    const progress = new StudyProgressService();
    const session = new PracticeSessionService(progress);
    const questions: InterviewQuestion[] = [{
      id: 'Q001',
      title: 'Question one',
      categoryId: 'csharp',
      tags: [],
      variants: [{ wording: 'Question one?', sources: ['Source: test'] }],
      sections: [{ type: 'paragraph', content: 'Full original answer.' }],
      references: []
    }];

    session.start(['Q001']);
    expect(session.current(questions).title).toBe('Question one');
    session.assess('confident');
    expect(session.getPosition()).toBe(0);
    expect(session.isRevealed()).toBe(false);

    session.reveal();
    expect(session.isRevealed()).toBe(true);
    session.assess('confident');
    expect(session.isCompleted()).toBe(true);
    expect(session.summary()).toEqual({ total: 1, needsReview: 0, confident: 1 });
    expect(progress.statusFor('Q001')).toBe('confident');
  });

  it('handles an empty filtered set without starting an invalid session', () => {
    const session = new PracticeSessionService(new StudyProgressService());
    session.start([]);
    expect(session.hasSession()).toBe(false);
    expect(session.current([])).toBeNull();
  });
});
