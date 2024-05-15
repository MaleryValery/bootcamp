import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { t } from 'i18next';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type NavType = {
  className: string;
  menu: {
    users: string;
    adduser: string;
    // updateuser: string;
  };
};

function CustomNav({ className, menu }: NavType) {
  const { isAuth, handleLogout } = useAuth();
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  // const [lg, setLg] = useState('en');
  // t('headerTitle');

  return (
    <nav>
      {t('headerTitle')}
      <ul className={className}>
        {Object.entries(menu).map((el) => (
          <NavLink key={el[0]} to={`/admin/${el[0]}`}>
            {el[1]}
          </NavLink>
        ))}
        {isAuth && (
          <NavLink onClick={() => handleLogout()} to="/">
            Logout
          </NavLink>
        )}
        <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">en</option>
          <option value="ru">ru</option>
        </select>
      </ul>
    </nav>
  );
}

export default CustomNav;
