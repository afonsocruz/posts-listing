import React from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { Posts } from '../../types/types';
import { getCurrentTimestamp, getTimestampForDB } from '../../hooks/useMoment';
import { AppContext } from '../../context/AppContext';
import Button from './Button';

interface PostMaker {
  onSubmit: (data: Posts) => void;
}

const PostMaker: React.FC<PostMaker> = ({ onSubmit }: PostMaker) => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = React.useContext(AppContext);

  const onSubmitHandler: SubmitHandler<FieldValues> = (data) => {
    const post = data.post;
    const timestamp = getTimestampForDB();
    const createdAt = getCurrentTimestamp();
    const userEmail = user?.email as string;
    const id = user?.uid!;
    const avatarUrl = user?.photoURL!;
    const name = user?.displayName!;
    onSubmit({ post, timestamp, userEmail, id, avatarUrl, createdAt, name });
    reset();
  };

  return (
    <div className="flex items-center justify-center bg-primary h-48 rounded-lg border border-fluorescent space-x-4 mb-8">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="w-1/2 text-sm flex items-center justify-center space-x-4"
      >
        <input
          {...register('post')}
          placeholder="O que você está pensando hoje?"
          className="px-4 py-6 outline-none rounded-lg w-full text-white placeholder:text-white bg-zinc-600"
        />
        <Button
          type="submit"
          label={'Enviar'}
          className="text-white p-2 border border-fluorescent rounded-lg "
        />
      </form>
    </div>
  );
};

export default PostMaker;
