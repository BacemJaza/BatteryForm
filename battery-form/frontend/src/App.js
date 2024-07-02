import './App.css';
import {BrowserRouter as Router,RouterProvider,Routes,Switch, createBrowserRouter} from 'react-router-dom'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Login/>,
      errorElement: <NotFoundPage/>
    },
    {
      path:"/login",
      element: <Login/>
    },
    {
      path:"/dashboard",
      element: <Dashboard/>
    }
])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
