import { ReactNode, useState } from 'react';
import { UserContext } from './UserContext';
import usersMock from '../mocks/jsons/users.json';
import { User } from '../types/User';
import { Sort } from '../types/SortEnam';

function UserProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState(usersMock);

  const sortUsers = (type: Sort, userKey: keyof User) => {
    setUsers((prev) =>
      prev.sort((a, b) =>
        type === Sort.asc
          ? a[userKey].localeCompare(b[userKey])
          : b[userKey].localeCompare(a[userKey])
      )
    );
  };

  const filterUsers = (name: string) => {
    console.log('🚀 ~ filterUsers ~ name:', name);
    setUsers((prev) => prev.filter((user) => user.firstName.includes(name)));
  };

  // const handleChangePage = (type: TypePage, limit: number, page: number) => {
  //   if (limit * page >= users.length - 1 && type === TypePage.next) return;
  //   if (page === 1 && type === TypePage.prev) return;

  //   if (type === TypePage.next) {
  //     setUsers(usersMock.slice(limit * (page - 1), limit * page));
  //   }
  //   if (type === TypePage.prev) {
  //     setUsers(usersMock.slice(limit * page, limit * (page + 1)));
  //   }
  // };

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
        sortUsers,
        filterUsers,
        // handleChangePage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
