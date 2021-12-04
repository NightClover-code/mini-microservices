//importing hooks & utils
import { useState } from 'react';
import { postsAPI } from '../utils';

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSumbitHandler = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (!title.length) return null;

    await postsAPI.post('/posts', {
      title,
    });

    setTitle('');
  };

  return (
    <div>
      <form onSubmit={onSumbitHandler}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
