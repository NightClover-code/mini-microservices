export interface CommentsByPostId {
  [postId: string]: {
    id: string;
    content: string;
    status: string;
  }[];
}

export * from './api';
