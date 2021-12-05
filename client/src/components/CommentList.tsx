//importing components & utils
import { Comment } from '../interfaces';
import { v4 as randomId } from 'uuid';

interface CommentCreateProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentCreateProps> = ({ comments }) => {
  const renderedComments = comments.map(comment => {
    let content = '';

    switch (comment.status) {
      case 'approved':
        content = comment.content;
        break;
      case 'pending':
        content = 'This comment is awaiting moderation';
        break;
      case 'rejected':
        content = 'This comment has been rejected';
        break;
    }

    return <li key={randomId()}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
