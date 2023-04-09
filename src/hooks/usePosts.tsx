import { useQuery } from 'react-query';
import api from '../api/api';
import { Post } from '../types/types';

interface UsePosts {
  data: Post[] | undefined;
  isLoading: boolean;
  error: any;
}

const usePosts = (postId?: number): UsePosts => {
  const { isLoading, error, data } = useQuery<Post[]>(
    ['post', postId],
    async () => {
      const response = await api().get(postId ? `posts/${postId}` : `posts`);
      return response.data;
    }
  );

  return {
    data,
    isLoading,
    error,
  };
};

export default usePosts;
