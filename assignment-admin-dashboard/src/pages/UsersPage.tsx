import UserItem from '../UI/UserItem';
import users from '../mocks/jsons/users.json';

function UsersPage() {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <UserItem
            key={user.id}
            name={user.firstName}
            email={user.email}
            role={user.lastName}
          />
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;
