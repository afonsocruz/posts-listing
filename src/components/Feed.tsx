import Post from './UI/Post';

import { Posts } from '../types/types';
import LoadingPage from './UI/LoadingSpinner';

interface FeedProps {
  data: Posts[];
  isLoading: boolean;
}

const Feed: React.FC<FeedProps> = (props: FeedProps) => {
  if (!props.data) return <div />;

  if (props.isLoading) return <LoadingPage />;

  return (
    <div className="space-y-8">
      {props.data?.map((item: Posts) => (
        <Post
          key={item.id}
          post={item.post}
          name={item.name}
          avatarUrl={item.avatarUrl}
          createdAt={item.createdAt}
        />
      ))}
    </div>
  );
};

export default Feed;
