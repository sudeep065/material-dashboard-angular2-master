import { InterviewFilters, InterviewLibraryData, InterviewQuestion, StudyProgress } from './interview.models';
import { QuestionService } from './question.service';
import { of } from 'rxjs/observable/of';
import * as importedLibrary from '../../assets/data/interview-questions.json';

const library = importedLibrary as any as InterviewLibraryData;
const emptyProgress: StudyProgress = { version: 1, bookmarks: [], statuses: {}, lastQuestionId: null };

function question(id: string, title: string, categoryId: string, wording: string, body: string): InterviewQuestion {
  return {
    id,
    title,
    categoryId,
    tags: [],
    variants: [{ wording, sources: ['Source: test'] }],
    sections: [{ type: 'paragraph', content: body }],
    references: []
  };
}

describe('Interview question content', () => {
  it('contains 202 uniquely identified answer blocks across the verified category totals', () => {
    const expected: { [categoryId: string]: number } = {
      csharp: 31,
      'async-performance': 13,
      'aspnet-core-web-api': 30,
      'sql-ef-core': 32,
      'caching-redis': 5,
      react: 7,
      'architecture-distributed-systems': 20,
      'azure-integration-delivery': 19,
      'security-identity': 13,
      'generative-ai-rag': 7,
      'production-troubleshooting-leadership': 16,
      testing: 7,
      'coding-exercises': 2
    };
    const ids = library.questions.map(item => item.id);
    expect(library.categories.length).toBe(13);
    expect(library.questions.length).toBe(202);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids).toEqual(Array.from({ length: 202 }, (_, index) => 'Q' + ('00' + (index + 1)).slice(-3)));
    expect(library.questions.map(item => item.id)).toContain('Q001');
    expect(library.questions.map(item => item.id)).toContain('Q202');
    Object.keys(expected).forEach(categoryId => {
      expect(library.questions.filter(item => item.categoryId === categoryId).length).toBe(expected[categoryId]);
    });
    library.questions.forEach(item => {
      expect(item.variants.length).toBeGreaterThan(0);
      expect(item.sections.length).toBeGreaterThan(0);
      item.variants.forEach(variant => expect(variant.sources.length).toBeGreaterThan(0));
    });
    expect(library.questions.reduce((total, item) => total + item.variants.reduce((count, variant) => count + variant.sources.length, 0), 0)).toBe(332);
    const codeExamples = library.questions.reduce((all, item) => all.concat(item.sections.filter(section => section.type === 'code')), []);
    expect(codeExamples.length).toBe(10);
    expect(codeExamples.every(example => example.language === 'csharp' || example.language === 'sql')).toBe(true);
    expect(codeExamples.some(example => example.content.indexOf('\n') !== -1)).toBe(true);
  });
});

describe('QuestionService search', () => {
  let service: QuestionService;
  let questions: InterviewQuestion[];

  beforeEach(() => {
    service = new QuestionService({ get: () => of(library) } as any);
    questions = [
      question('Q001', 'Query execution strategies', 'csharp', 'How does deferred execution work?', 'Deferred execution runs on enumeration.'),
      question('Q002', 'Data access patterns', 'sql-ef-core', 'What is an IQueryable provider?', 'The provider composes and translates expressions.'),
      question('Q003', 'Caching fundamentals', 'caching-redis', 'How does cache expiration work?', 'Use a cache expiration policy.')
    ];
  });

  it('searches alternate question wordings and ranks wording matches above answer-body matches', () => {
    const filters: InterviewFilters = { query: 'IQueryable', categoryId: '', bookmarkedOnly: false, status: '' };
    const result = service.search(questions, filters, emptyProgress);
    expect(result.map(item => item.id)).toEqual(['Q002']);

    const bodyMatches = [
      question('Q004', 'Asynchronous calls', 'csharp', 'How do async calls work?', 'IQueryable execution details.'),
      question('Q005', 'IQueryable', 'csharp', 'What is it?', 'A query interface.')
    ];
    expect(service.search(bodyMatches, filters, emptyProgress).map(item => item.id)).toEqual(['Q005', 'Q004']);
  });

  it('combines category, bookmark, and study-status filters with search', () => {
    const progress: StudyProgress = {
      version: 1,
      bookmarks: ['Q001', 'Q002'],
      statuses: { Q001: 'needs-review', Q002: 'confident' },
      lastQuestionId: 'Q001'
    };
    const filters: InterviewFilters = { query: 'query', categoryId: 'csharp', bookmarkedOnly: true, status: 'needs-review' };
    expect(service.search(questions, filters, progress).map(item => item.id)).toEqual(['Q001']);
  });
});
