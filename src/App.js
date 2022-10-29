import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/auth/register-page';
import LoginPage from './pages/auth/login-page'
import MainPage from './pages/main-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
