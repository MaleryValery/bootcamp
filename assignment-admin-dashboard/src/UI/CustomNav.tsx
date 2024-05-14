import { NavLink } from 'react-router-dom';

type NavType = {
  menu: {
    users: string;
    adduser: string;
    updateuser: string;
  };
};

function CustomNav({ menu }: NavType) {
  return (
    <nav>
      <ul>
        {Object.entries(menu).map((el) => (
          <NavLink key={el[0]} to={`/${el[0]}`}>
            {el[1]}
          </NavLink>
        ))}
        <NavLink to="/">Logout</NavLink>
      </ul>
    </nav>
  );
}

export default CustomNav;
