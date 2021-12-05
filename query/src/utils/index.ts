export interface Post {
  [id: string]: {
    id: string;
    title: string;
    comments: {
      id: string;
      content: string;
      status: string;
    }[];
  };
}
