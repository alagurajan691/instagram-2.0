import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; // Added createBrowserRouter
import View from './View.jsx';
import Profile from './profile.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/story/:id',
    element: <View />
  },
  {
    path:'/Profile',
    element: <Profile />
  }
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
