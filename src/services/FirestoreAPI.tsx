import { firestore } from '../firebase';
import { addDoc, collection, getDocs, onSnapshot } from 'firebase/firestore';
import { Posts } from '../types/types';

const dbRef = collection(firestore, 'posts');

export const createPost = (data: Posts) => {
  let object = {
    id: data.id,
    post: data.post,
    timestamp: data.timestamp,
    userEmail: data.userEmail,
    avatarUrl: data.avatarUrl,
    createdAt: data.createdAt,
    name: data.name,
  };

  addDoc(dbRef, object)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getPosts = async (setPosts: any) => {
  onSnapshot(dbRef, (response) => {
    setPosts(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};
