import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="mt-10 text-center ">
      <h1 className="text-[32px] uppercase">Welcome</h1>
      <h3 className="mb-10 text-xl">login to start</h3>
      <Link className="rounded bg-amber-400 px-6 py-3  text-xl" to="/login">
        LOGIN
      </Link>
    </div>
  );
}

export default Homepage;
