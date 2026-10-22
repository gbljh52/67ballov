import { createRoot } from 'react-dom/client'
import './globals.scss'
import App from './pages/App/App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import AuthLayout from './pages/auth/AuthLayout/AuthLayout.tsx'
import Login from './pages/auth/Login/Login.tsx'
import Register from './pages/auth/Register/Register.tsx'
import Page404 from './pages/404/Page404.tsx'
import Search from './pages/Search/Search.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path='search'element={<Search />} />

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>,
)
