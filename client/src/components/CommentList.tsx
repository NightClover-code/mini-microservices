import { useState, useEffect } from 'react';
import { commentsAPI } from '../utils';
import { v4 as randomId } from 'uuid';

interface CommentCreateProps {
  postId: string;
}

const CommentList: React.FC<CommentCreateProps> = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const { data } = await commentsAPI.get(`/posts/${postId}/comments`);

    setComments(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedComments = comments.map((comment: any) => {
    return <li key={randomId()}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
