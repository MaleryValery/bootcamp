import UserItem from '../UI/UserItem';
import { useUserContext } from '../context/UserContext';

function UsersPage() {
  const { users } = useUserContext();
  return (
    <table className="sm:text-md w-11/12 text-base">
      <thead>
        <tr className="text-left">
          <th className="">Name</th>
          <th className="hidden sm:block">Surname</th>
          <th className=" ">Email</th>
          <th className="hidden sm:block">Date Of Birth</th>
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
  );
}

export default UsersPage;
