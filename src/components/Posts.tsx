import { Post } from '../types/types';

interface PostsProps {
  data?: Post[];
}

const Posts = ({ data = [] }: PostsProps | any) => {
  return (
    <div className="posts">
      {data.length > 0 ? (
        data.map((post: Post) => (
          <div className="post" key={post?.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <div className="unique-post">
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default Posts;
