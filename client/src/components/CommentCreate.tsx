import { FormEvent, useState } from 'react';
import { commentsAPI } from '../utils';

interface CommentCreateProps {
  postId: string;
}

const CommentCreate: React.FC<CommentCreateProps> = ({ postId }) => {
  const [content, setContent] = useState('');

  const onSumbitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!content.length) return null;

    await commentsAPI.post(`/posts/${postId}/comments`, { content });

    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSumbitHandler}>
        <div className="form-group">
          <label>New comment</label>
          <input
            type="text"
            value={content}
            onChange={e => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentCreate;
