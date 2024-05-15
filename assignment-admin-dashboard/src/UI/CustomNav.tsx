import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

type NavType = {
  className: string;
  menu: {
    users: string;
    adduser: string;
    updateuser: string;
  };
};

function CustomNav({ className, menu }: NavType) {
  const { isAuth } = useAuth();
  return (
    <nav>
      <ul className={className}>
        {Object.entries(menu).map((el) => (
          <NavLink key={el[0]} to={`/admin/${el[0]}`}>
            {el[1]}
          </NavLink>
        ))}
        {isAuth && <NavLink to="/">Logout</NavLink>}
      </ul>
    </nav>
  );
}

export default CustomNav;
