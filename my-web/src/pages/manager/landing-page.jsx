import React, { useState } from 'react';
import ManagerSidebar from './sidebar';
import Dashboard from './dashboard';
import Reports from './reports';
import InventoryOverview from './inventoryOverview';
import SalesOverview from './salesOverview';
import CustomOrders from './customOrders';
import UserManagement from './userManagement';
import SystemSettings from './systemSettings';

import '../../styles/manager/landing-page.css';

const LandingPage = ({ onLogout }) => {
  // State to track which page is active
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="manager-container">
      {/* Sidebar */}
      <ManagerSidebar 
        onLogout={onLogout} 
        activeTab={activePage} 
        setActiveTab={setActivePage} 
      />

      {/* Main Content */}
      <main className="main-content">
        {activePage === 'dashboard' && <Dashboard />}
        {activePage === 'reports' && <Reports />}
        {activePage === 'inventory' && <InventoryOverview />}
        {activePage === 'sales' && <SalesOverview />}
        {activePage === 'customOrders' && <CustomOrders />}
        {activePage === 'userManagement' && <UserManagement />}
        {activePage === 'systemSettings' && <SystemSettings />}
      </main>
    </div>
  );
};

export default LandingPage;
