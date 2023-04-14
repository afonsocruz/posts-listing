import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
  UserCredential,
} from 'firebase/auth';
import { auth } from '../firebase';

export const UserLogin = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    const errorMessage =
      err instanceof Error && err.message
        ? err.message
        : 'An unknown error occurred.';
    throw new Error(errorMessage);
  }
};

export const UserRegister = async (email: string, password: string) => {
  try {
    const response: { user?: User } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return response;
  } catch (err) {
    return err;
  }
};
