import { Outlet } from 'react-router-dom';
import CustomNav from '../UI/CustomNav';
import { NAV_BAR } from '../consts';

function AppLayout() {
  return (
    <>
      <header className=" border-b border-stone-200 bg-amber-200 px-4 py-3 capitalize">
        <CustomNav
          className=" mx-auto flex w-11/12 place-content-between items-center gap-4 "
          menu={NAV_BAR}
        />
      </header>
      <main className=" flex place-content-center px-4">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
