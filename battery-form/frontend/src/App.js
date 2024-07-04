import React from 'react';
import { RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFoundPage from './pages/NotFoundPage';
import FormulairePerformanceDurability from './components/performanceanddurability';
import FormulaireDesignCircularity from './components/designofcircularity';
import FormulaireSupplychain from './components/supplychain';
import FormulaireGeneralinformation from './components/generalinformation';

// Création du router avec createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/performanceanddurability',
    element: <FormulairePerformanceDurability />
  },
  {
    path: '/designofcircularity',
    element: <FormulaireDesignCircularity />
  },
  {
    path: '/supplychain',
    element: <FormulaireSupplychain />
  },
  {
    path: '/generalinformation',
    element: <FormulaireGeneralinformation />
  }
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Routes />
    </RouterProvider>
  );
}

export default App;
