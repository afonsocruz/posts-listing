import React from 'react';
import { User } from 'firebase/auth';
import { auth } from '../firebase';

interface AppContext {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = React.createContext<AppContext>({
  user: null,
  setUser: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
});

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const value = React.useMemo(
    () => ({ user, setUser, currentPage, setCurrentPage }),
    [user, currentPage]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
