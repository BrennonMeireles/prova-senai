import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './Pages/login';
import { CadastrarPage } from './Pages/cadastrar/cadastrar';
import Board from './Pages/Board/board';

export const router = createBrowserRouter([
  { path: '/', element: <LoginPage /> }, 
  { path: '/cadastrar', element: <CadastrarPage /> },
  { path: '/home', element: <Board /> }

]);
