import Card from './UI/Card';

import stringManipulator from '../utils/stringManipulator';

import { Post } from '../types/types';

interface FeedProps {
  data: Post[];
}

const Feed: React.FC<FeedProps> = (props: FeedProps) => {
  if (!props.data) return <div />;

  return (
    <>
      {props.data?.map((item: Post) => (
        <Card
          key={item?.id}
          title={stringManipulator(item?.title, 5)}
          body={stringManipulator(item?.body, 12) + ' ...'}
        />
      ))}
    </>
  );
};

export default Feed;
