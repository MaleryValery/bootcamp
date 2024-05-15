type UserType = {
  name: string;
  email: string;
  role: string;
};

function UserItem({ name, email, role }: UserType) {
  return (
    <li className="m-2 rounded bg-stone-200 p-4">
      <p>
        {name} {role}
      </p>
      <p>{email}</p>
    </li>
  );
}

export default UserItem;
