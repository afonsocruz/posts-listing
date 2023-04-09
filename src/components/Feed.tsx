import Card from './Card';
import LoadingPage from './LoadingSpinner';

import stringManipulator from '../utils/stringManipulator';

import { Post } from '../types/types';

interface FeedProps {
  postsLoaded: boolean;
  data: Post[];
}

const Feed: React.FC<FeedProps> = (props: FeedProps) => {
  if (props.postsLoaded) return <LoadingPage />;

  if (!props.data) return <div />;

  return (
    <>
      {props.data?.map((item: Post) => (
        <Card
          key={item?.id}
          title={stringManipulator(item?.title, 5)}
          body={stringManipulator(item?.body, 15)}
        />
      ))}
    </>
  );
};

export default Feed;
