import React from 'react';
import { User } from 'firebase/auth';
import { auth } from '../firebase';

interface AppContext {
  user: User | null;
  currentPage: number;
  activeProfileDropdown: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setActiveProfileDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = React.createContext<AppContext>({
  user: null,
  currentPage: 1,
  activeProfileDropdown: false,
  setUser: () => {},
  setCurrentPage: () => {},
  setActiveProfileDropdown: () => {},
});

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [activeProfileDropdown, setActiveProfileDropdown] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const value = React.useMemo(
    () => ({
      user,
      setUser,
      currentPage,
      setCurrentPage,
      activeProfileDropdown,
      setActiveProfileDropdown,
    }),
    [user, currentPage, activeProfileDropdown]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
