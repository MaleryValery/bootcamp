import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

const userDB = {
  userName: 'bob',
  password: '123',
};

function Login() {
  const { loginHandler } = useAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fakeFetch = (user, password) => {
    if (user === userDB.userName && password === userDB.password) {
      return Promise.resolve({
        username: user,
        password,
      });
    } else return Promise.reject('Invalid username or password');
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const formData = new FormData(e.target);
    const userName = formData.get('username');
    const userPassword = formData.get('password');
    try {
      const response = await fakeFetch(userName, userPassword);
      if (response.username === 'bob') {
        loginHandler();
        navigate('/home', { state: { username: response.username } });
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <h3>login form</h3>
      <form onSubmit={handlerSubmit}>
        <input type="text" name="username" placeholder="name" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">submit</button>
      </form>
      {!!error && <p>{error}</p>}
    </div>
  );
}

export default Login;
