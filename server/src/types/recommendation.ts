export interface Recommendation {
  id: string;
  title: string;
  type: 'course' | 'article' | 'book';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}