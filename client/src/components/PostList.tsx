import { useEffect, useState } from 'react';
import { postsAPI } from '../utils';
import { v4 as randomId } from 'uuid';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';
import { Post } from '../interfaces';

const PostList = () => {
  const [posts, setPosts] = useState<Post | {}>({});

  const fetchPosts = async () => {
    const { data }: { data: Post } = await postsAPI.get('/posts');

    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post: any) => {
    return (
      <div
        className="card"
        style={{ width: '20%', marginBottom: '20px' }}
        key={randomId()}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList postId={post.id} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default PostList;
