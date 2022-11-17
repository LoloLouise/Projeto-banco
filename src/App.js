import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import MainLayout from './layouts/MainLayout';
import RegisterLayout from './layouts/RegisterLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
  },
  {
    path: '/cadastro',
    element: <RegisterLayout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
