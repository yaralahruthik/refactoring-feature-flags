import AuthLayout from '@/layouts/auth-layout';
import About from '@/pages/about';
import Home from '@/pages/home';
import Login from '@/pages/login';
import Register from '@/pages/register';
import { Route, Routes } from 'react-router';
import AppLayout from './layouts/app-layout';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
