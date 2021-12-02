import { Comment } from '../interfaces';
import { v4 as randomId } from 'uuid';

interface CommentCreateProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentCreateProps> = ({ comments }) => {
  const renderedComments = comments.map(comment => {
    return <li key={randomId()}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
