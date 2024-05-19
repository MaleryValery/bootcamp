import { createContext, useContext } from 'react';
import users from '../mocks/jsons/users.json';
import { User } from '../types/User';
import { Sort } from '../types/SortEnam';

type initValueType = {
  users: User[];
  addUser: (user: User) => void;
  deleteUser: (id: string) => void;
  updateUser: (user: User) => void;
  sortUsers: (type: Sort, userKey: keyof User) => void;
  filterUsers: (name: string) => void;
};

const initValue = {
  users: users,
  addUser: () => {},
  deleteUser: () => {},
  updateUser: () => {},
  sortUsers: () => {},
  filterUsers: () => {},
};

export const UserContext = createContext<initValueType>(initValue);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error('User context is used outside of UserhProvider');

  return context;
};
