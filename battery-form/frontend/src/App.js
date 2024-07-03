import './App.css';
import { BrowserRouter as Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFoundPage from './pages/NotFoundPage';
import FormulairePerformanceDurability from './components/performanceanddurability';
import FormulaireDesignCircularity from './components/designofcircularity';
import FormulaireSupplychain from './components/supplychain';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <NotFoundPage />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "/performanceanddurability",
      element: <FormulairePerformanceDurability />
    },
    {
      path: "/designofcircularity",
      element: <FormulaireDesignCircularity/>
    },
    {
      path: "/supplychain",
      element:<FormulaireSupplychain/>
    },
  ]);

  return (
    <RouterProvider router={router}>
      <Routes />
    </RouterProvider>
  );
}

export default App;
