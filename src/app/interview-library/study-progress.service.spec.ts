import { StudyProgressService } from './study-progress.service';

const storageKey = 'interview-library-progress:v1';

describe('StudyProgressService', () => {
  beforeEach(() => localStorage.removeItem(storageKey));

  it('persists bookmarks, study status, and the last opened question across service instances', () => {
    const first = new StudyProgressService();
    first.toggleBookmark('Q001');
    first.setStatus('Q001', 'needs-review');
    first.setLastQuestion('Q001');

    const restored = new StudyProgressService();
    expect(restored.isBookmarked('Q001')).toBe(true);
    expect(restored.statusFor('Q001')).toBe('needs-review');
    expect(restored.getLastQuestionId()).toBe('Q001');
  });

  it('recovers safely from malformed or unsupported stored data', () => {
    localStorage.setItem(storageKey, '{not valid json');
    const malformed = new StudyProgressService();
    expect(malformed.snapshot()).toEqual({ version: 1, bookmarks: [], statuses: {}, lastQuestionId: null });

    localStorage.setItem(storageKey, JSON.stringify({ version: 99, bookmarks: ['Q001'], statuses: {} }));
    expect(new StudyProgressService().snapshot()).toEqual({ version: 1, bookmarks: [], statuses: {}, lastQuestionId: null });
  });
});
