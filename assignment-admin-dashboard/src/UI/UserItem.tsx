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
    <tr className="border-b border-stone-300 dark:border-[#5C5470]">
      <td className="py-2">{user.firstName}</td>
      <td className="py-2hidden sm:block">{user.lastName}</td>
      <td className="py-2">{user.email}</td>
      <td className="hidden py-2 sm:block">{user.dob}</td>
      <td className="py-2">
        <button onClick={() => deleteUser(user.id)}>
          <RiDeleteBin2Line className="hover:scale-105" />
        </button>
      </td>
      <td className="py-2">
        <button
          onClick={() => navigate('/admin/updateuser', { state: { user } })}
        >
          <GrEdit className="hover:-rotate-12" />
        </button>
      </td>
    </tr>
  );
}

export default UserItem;
