export interface Posts {
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

export * from './helpers';
