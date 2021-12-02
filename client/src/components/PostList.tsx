import { useEffect, useState } from 'react';
import { queryAPI } from '../utils';
import { v4 as randomId } from 'uuid';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';
import { Posts } from '../interfaces';

const PostList = () => {
  const [posts, setPosts] = useState<Posts>({});

  const fetchPosts = async () => {
    const { data }: { data: Posts } = await queryAPI.get('/posts');

    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map(post => {
    return (
      <div
        className="card"
        style={{ width: '20%', marginBottom: '20px' }}
        key={randomId()}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
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
