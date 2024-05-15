import UserItem from '../UI/UserItem';
import { useUserContext } from '../context/UserContext';

function UsersPage() {
  const { users } = useUserContext();
  return (
    <div>
      <ul>
        {users.map((user) => (
          <UserItem
            key={user.id}
            user={user}
           
          />
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;
