import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AuthProvider from './context/AuthProvider';
import ProtectedRoute from './ProtectedRoute';
/**
 * App with
 * - Home
 * - Login {u:bob,p:12345}
 * 20 mins
 */
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={<ProtectedRoute path="/login" element={<Home />} />}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
