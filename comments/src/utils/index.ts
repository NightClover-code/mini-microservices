export interface CommentsByPostId {
  [postId: string]: Comment[];
}

export interface Comment {
  id: string;
  content: string;
  status: string;
}

export * from './api';
