import { Outlet } from 'react-router-dom';
import CustomNav from '../UI/CustomNav';
import { NAV_BAR } from '../consts';

function AppLayout() {
  return (
    <>
      <header className="border-b border-stone-200 bg-amber-200 px-4 py-3 uppercase">
        <CustomNav className="flex place-content-around " menu={NAV_BAR} />
      </header>
      <main className="flex place-content-center">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
