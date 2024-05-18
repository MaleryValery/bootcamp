import { useState } from 'react';
import UserItem from '../UI/UserItem';
import { useUserContext } from '../context/UserContext';
import { Sort } from '../types/SortEnam';
import { User } from '../types/User';
import { FaSortAmountDown } from 'react-icons/fa';
import { FaSortAmountUp } from 'react-icons/fa';

function UsersPage() {
  const { users, sortUsers } = useUserContext();
  const [sortType, setSortType] = useState(Sort.asc);
  const [sortField, setSortField] = useState<keyof User | null>();

  const icon =
    sortType === Sort.asc ? (
      <FaSortAmountDown size={14} className="inline" />
    ) : (
      <FaSortAmountUp size={14} className="inline" />
    );

  const handleSortUser = (userKey: keyof User) => {
    setSortField(userKey);
    console.log();
    if (sortType !== Sort.asc) {
      setSortType(Sort.asc);
      sortUsers(Sort.asc, userKey);
    } else {
      setSortType(Sort.desc);
      sortUsers(Sort.desc, userKey);
    }
  };

  return (
    <div>
      <table className="w-11/12 place-self-start text-base sm:text-[15px]">
        <thead className="bg-lime-200 backdrop-opacity-50">
          <tr className="text-left">
            <th onClick={() => handleSortUser('firstName')}>
              Name {sortField === 'firstName' ? icon : ''}
            </th>
            <th
              onClick={() => handleSortUser('lastName')}
              className="hidden sm:block"
            >
              Surname {sortField === 'lastName' ? icon : ''}
            </th>
            <th onClick={() => handleSortUser('email')} className=" ">
              Email {sortField === 'email' ? icon : ''}
            </th>
            <th
              onClick={() => handleSortUser('dob')}
              className="hidden sm:block"
            >
              Date Of Birth {sortField === 'dob' ? icon : ''}
            </th>
            <th className=" " />
            <th className=" " />
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersPage;
