import { ReactNode, useState } from 'react';
import { UserContext } from './UserContext';
import usersMock from '../mocks/jsons/users.json';
import { User } from '../types/User';

function UserProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState(usersMock);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  const deleteUser = (id: string) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const updateUser = (newUser: User) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id !== newUser.id ? user : { ...user, ...newUser }
      )
    );
  };

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        deleteUser,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
