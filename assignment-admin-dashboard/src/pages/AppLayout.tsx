import CustomNav from '../UI/CustomNav';
import { NAV_BAR } from '../consts';

function AppLayout() {
  return (
    <header>
      <CustomNav menu={NAV_BAR} />
    </header>
  );
}

export default AppLayout;
