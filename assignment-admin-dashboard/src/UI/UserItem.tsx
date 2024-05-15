import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { User } from '../types/User';

type UserType = {
  user: User;
};

function UserItem({ user }: UserType) {
  const { deleteUser } = useUserContext();
  const navigate = useNavigate();
  return (
    <li className="m-2 flex justify-between gap-2 rounded bg-stone-200 p-4">
      <div>
        <p>
          {user.firstName} {user.lastName}
        </p>
        <p>{user.email}</p>
      </div>
      <div className="flex flex-col gap-2">
        <button onClick={() => deleteUser(user.id)}>❌</button>
        <button
          onClick={() => navigate('/admin/updateuser', { state: { user } })}
        >
          ✏️
        </button>
      </div>
    </li>
  );
}

export default UserItem;
