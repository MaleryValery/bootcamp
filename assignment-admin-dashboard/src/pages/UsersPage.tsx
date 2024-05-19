import { useState } from 'react';
import UserItem from '../UI/UserItem';
import { useUserContext } from '../context/UserContext';
import { Sort } from '../types/SortEnam';
import { User } from '../types/User';
import { FaSortAmountDown } from 'react-icons/fa';
import { FaSortAmountUp } from 'react-icons/fa';

import { useTranslation } from 'react-i18next';

function UsersPage() {
  const { t } = useTranslation();
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
    <div className="w-11/12 pt-10">
      <table className="w-full place-self-start text-base sm:text-[15px]">
        <thead className="border-b-2 border-stone-500 dark:border-[#B9B4C7] dark:text-[#FAF0E6] dark:text-opacity-80">
          <tr className="text-left">
            <th
              onClick={() => handleSortUser('firstName')}
              className="capitalize"
            >
              {t('name')} {sortField === 'firstName' ? icon : ''}
            </th>
            <th
              onClick={() => handleSortUser('lastName')}
              className="capitalize hidden py-2 sm:block"
            >
              {t('surname')} {sortField === 'lastName' ? icon : ''}
            </th>
            <th onClick={() => handleSortUser('email')} className="capitalize ">
              {t('email')} {sortField === 'email' ? icon : ''}
            </th>
            <th
              onClick={() => handleSortUser('dob')}
              className="capitalize hidden sm:block"
            >
              {t('dob')} {sortField === 'dob' ? icon : ''}
            </th>
            <th className=" " />
            <th className=" " />
          </tr>
        </thead>
        <tbody className="dark:text-[#B9B4C7]">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersPage;
