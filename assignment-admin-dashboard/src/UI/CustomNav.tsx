import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import { TbLayoutDashboardFilled } from 'react-icons/tb';
import { LuLogIn } from 'react-icons/lu';
import { LuLogOut } from 'react-icons/lu';
import { CgMenuGridO } from 'react-icons/cg';
import CustomIconButton from './CustomIconButton';
import { useState } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';
import { useTheme } from '../context/ThemeContext';

type NavType = {
  className: string;
  menu: {
    viewUsers: string;
    createUsers: string;
  };
};

function CustomNav({ className, menu }: NavType) {
  const [isMenu, setIsMenu] = useState(false);
  const { isAuth, handleLogout } = useAuth();
  const { theme, handleChangeTheme } = useTheme();
  const navigator = useNavigate();
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const handleLoginLogout = () => {
    if (!isAuth) {
      navigator('/login');
    } else {
      navigator('/');
      handleLogout();
    }
  };

  return (
    <nav className="flex flex-1 flex-col dark:text-[#B9B4C7] ">
      <ul className={`${className} hidden self-start sm:flex`}>
        <li>
          <NavLink to="/" className="text-l flex items-center gap-2">
            <TbLayoutDashboardFilled size={24} /> DashBoard
          </NavLink>
        </li>
        {Object.entries(menu).map((el) => {
          return (
            <NavLink key={el[0]} to={`/admin/${el[0]}`}>
              {t(el[0])}
            </NavLink>
          );
        })}
        <li className="ml-auto pl-2">
          <CustomIconButton
            onClick={handleChangeTheme}
            icon={
              theme === 'dark' ? (
                <MdOutlineDarkMode className="dark:fill-[#B9B4C7]" size={24} />
              ) : (
                <MdOutlineLightMode size={24} />
              )
            }
          />
        </li>
        <li>
          <CustomIconButton
            onClick={handleLoginLogout}
            icon={
              isAuth ? (
                <LuLogOut
                  color={theme === 'dark' ? '#B9B4C7' : '#352f44'}
                  size={24}
                />
              ) : (
                <LuLogIn
                  color={theme === 'dark' ? '#B9B4C7' : '#352f44'}
                  size={24}
                />
              )
            }
          />
        </li>

        <select
          className="rounded border border-none bg-transparent"
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">en</option>
          <option value="ru">ru</option>
        </select>
      </ul>
      <ul className={`flex sm:hidden`}>
        <li>
          <NavLink
            to="/"
            className="text-l flex items-center gap-2"
            onClick={() => setIsMenu(false)}
          >
            <TbLayoutDashboardFilled size={24} /> DashBoard
          </NavLink>
        </li>
        <li className="ml-auto">
          <select
            className=" rounded border border-none bg-transparent"
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="en">en</option>
            <option value="ru">ru</option>
          </select>
        </li>
        <li className="pl-2">
          <CustomIconButton
            onClick={handleChangeTheme}
            icon={
              theme === 'light' ? (
                <MdOutlineDarkMode size={24} />
              ) : (
                <MdOutlineLightMode size={24} />
              )
            }
          />
        </li>
        <li className="pl-2">
          <CustomIconButton
            onClick={() => {
              setIsMenu(false);
              handleLoginLogout();
            }}
            icon={isAuth ? <LuLogOut size={24} /> : <LuLogIn size={24} />}
          />
        </li>
        <li className="pl-2">
          <CustomIconButton
            onClick={() => setIsMenu((prev) => !prev)}
            icon={
              <CgMenuGridO
                size={24}
                className="font-bold transition-all hover:rotate-90"
              />
            }
          />
        </li>
        <div
          className={
            !isMenu
              ? 'hidden'
              : 'absolute left-0 right-0 top-[55px] z-30 h-full bg-amber-50 dark:bg-[#5C5470] dark:text-[#FAF0E6]'
          }
        >
          <ul className=" flex flex-col items-center space-y-6 p-4 pt-6 text-xl ">
            {Object.entries(menu).map((el) => {
              return (
                <NavLink
                  key={el[0]}
                  to={`/admin/${el[0]}`}
                  onClick={() => setIsMenu(false)}
                >
                  {t(el[0])}
                </NavLink>
              );
            })}
          </ul>
        </div>
      </ul>
    </nav>
  );
}

export default CustomNav;
