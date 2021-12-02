export interface Posts {
  [id: string]: {
    id: string;
    title: string;
    comments: Comment[];
  };
}

export interface Comment {
  id: string;
  content: string;
}
