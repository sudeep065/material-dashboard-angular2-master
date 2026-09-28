export interface InterviewCategory {
  id: string;
  name: string;
}

export interface InterviewVariant {
  wording: string;
  sources: string[];
}

export interface InterviewSection {
  heading?: string;
  type: 'paragraph' | 'code';
  content: string;
  language?: string;
}

export interface InterviewQuestion {
  id: string;
  title: string;
  categoryId: string;
  tags: string[];
  variants: InterviewVariant[];
  sections: InterviewSection[];
  references: string[];
}

export interface InterviewLibraryData {
  schemaVersion: number;
  sourceFileName: string;
  categories: InterviewCategory[];
  questions: InterviewQuestion[];
  conversionNotes: string[];
}

export type StudyStatus = 'new' | 'needs-review' | 'confident';

export interface StudyProgress {
  version: 1;
  bookmarks: string[];
  statuses: { [questionId: string]: StudyStatus };
  lastQuestionId: string | null;
}

export interface InterviewFilters {
  query: string;
  categoryId: string;
  bookmarkedOnly: boolean;
  status: string;
}
