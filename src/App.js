import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/auth/register-page';
import LoginPage from './pages/auth/login-page'
import MainPage from './pages/global/main-page';
import ErrorPage from './pages/global/error-page';
import AllUsers from './pages/global/all-users'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/error' element={<ErrorPage />} />
        <Route path='/users' element={<AllUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
