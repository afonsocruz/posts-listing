import { Post } from '../types/types';

interface PostsProps {
  data?: Post[];
}

const Posts = (props: PostsProps) => {
  if (!props.data) {
    return;
  }

  return (
    <div className="posts">
      {props.data.map((post: Post) => (
        <div className="post" key={post?.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
