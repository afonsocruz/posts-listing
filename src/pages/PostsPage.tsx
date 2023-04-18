import React from 'react';
import Layout from '../layout/Layout';
import { AppContext } from '../context/AppContext';
import PostMaker from '../components/UI/PostMaker';
import { createPost, getPosts } from '../services/FirestoreAPI';
import { Posts } from '../types/types';
import Feed from '../components/Feed';

const PostsPage: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [posts, setPosts] = React.useState<Posts[]>([]);

  const handlePostSubmit = async (data: Posts) => {
    createPost(data);
  };

  React.useMemo(() => {
    setIsLoading(true);
    getPosts(setPosts).then(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Layout>
        <PostMaker onSubmit={handlePostSubmit} />
        <Feed data={posts} isLoading={isLoading} />
      </Layout>
    </>
  );
};

export default PostsPage;
