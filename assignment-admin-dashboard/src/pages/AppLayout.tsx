import { Outlet } from 'react-router-dom';
import CustomNav from '../UI/CustomNav';
import { NAV_BAR } from '../consts';

function AppLayout() {
  return (
    <>
      <header className=" dark: bg-amber-200 px-4 py-3 capitalize dark:bg-[#352f44] ">
        <CustomNav
          className=" mx-auto flex w-11/12 place-content-between items-center gap-4 "
          menu={NAV_BAR}
        />
      </header>
      <main className="flex flex-1 place-content-center overflow-y-auto  px-4">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
