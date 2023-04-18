import { User } from '@firebase/auth';

export type FormValues = {
  email: string;
  password: string;
};

export interface Posts {
  id?: string;
  name?: string;
  post?: string;
  timestamp?: string;
  userEmail?: string;
  avatarUrl?: string;
  createdAt?: string;
}
