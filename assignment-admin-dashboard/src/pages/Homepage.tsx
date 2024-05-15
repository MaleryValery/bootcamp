import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <h1>Welcome</h1>
      <h3>Login to start</h3>
      <Link to="/login">LOGIN</Link>
    </div>
  );
}

export default Homepage;
