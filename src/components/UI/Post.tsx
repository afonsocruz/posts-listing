import React from 'react';
import { ThumbsUp } from 'lucide-react';
import { Posts } from '../../types/types';
import ProfileImage from '../../assets/dog.png';

const Post: React.FC<Posts> = ({ post, avatarUrl, name, createdAt }: Posts) => {
  return (
    <div className="rounded-lg bg-primary p-4 border-opacity-40 border border-fluorescent min-h-full overflow-hidden relative xs:w-full lg:w-4/5 my-0 mx-auto">
      <div className="flex space-x-3">
        <img
          src={!avatarUrl ? ProfileImage : avatarUrl}
          alt={name}
          className="rounded-trullyRounded w-12 h-12 cursor-pointer"
        />
        <div className="flex flex-col text-white text-sm justify-center">
          <span>{!name ? 'robot3' : name}</span>
          <span>{createdAt}</span>
        </div>
      </div>
      <p className="text-white text-lg mt-4">{post}</p>
      <ThumbsUp className="absolute bottom-2 right-2 text-fluorescent opacity-80 hover:opacity-100 cursor-pointer" />
    </div>
  );
};

export default Post;
