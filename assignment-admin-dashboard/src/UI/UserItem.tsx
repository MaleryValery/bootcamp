import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';
import { User } from '../types/User';

type UserType = {
  user: User;
};

function UserItem({ user }: UserType) {
  const { deleteUser } = useUserContext();
  const navigate = useNavigate();
  return (
    <tr className="">
      <td>{user.firstName}</td>
      <td className="hidden sm:block">{user.lastName}</td>
      <td>{user.email}</td>
      <td className="hidden sm:block">{user.dob}</td>
      <td>
        <button onClick={() => deleteUser(user.id)}>
          <RiDeleteBin2Line className="hover:scale-105" />
        </button>
      </td>
      <td>
        <button
          onClick={() => navigate('/admin/updateuser', { state: { user } })}
        >
          <GrEdit className="hover:rotate-12" />
        </button>
      </td>
    </tr>
  );
}

export default UserItem;
