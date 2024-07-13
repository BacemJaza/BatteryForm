import React from 'react';
import { RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFoundPage from './pages/NotFoundPage';
import FormulaireGeneralinformation from './components/formComponents/generalinformation';
import FormulaireDesignCircularity from './components/formComponents/designofcircularity';
import FormulairePerformanceDurability from './components/formComponents/performanceanddurability';
import FormulaireSupplychain from './components/formComponents/supplychain';
import FormulaireBatteryMaterials from './components/formComponents/batterymaterials';
import Footerform from './layouts/footerform';

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
  },
  {
    path: '/batterymaterials',
    element: <FormulaireBatteryMaterials />
  },
  {
    path: '/footerform',
    element: <Footerform />
  },
 
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Routes />
    </RouterProvider>
  );
}

export default App;