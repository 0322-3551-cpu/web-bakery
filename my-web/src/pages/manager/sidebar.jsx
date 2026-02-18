import React from 'react';
import { 
  LayoutDashboard, FileText, Package, ShoppingCart, Star, Users, Settings, LogOut 
} from 'lucide-react';

import '../../styles/manager/sidebar.css';
import logo from '../../assets/logo.png';

const ManagerSidebar = ({ onLogout, activeTab, setActiveTab }) => {
  return (
    <aside className="sidebar">
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <div className="sidebar-logo-container">
          <img src={logo} alt="Bakery Logo" className="sidebar-logo-img" />
        </div>
        <div className="logo-text">
          <h2>Regis Cake Shop</h2>
          <p>Main Branch</p>
        </div>
      </div>

      {/* User Info */}
      <div className="user-info">
        <h3>Manager</h3>
        <p>Admin</p>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <button 
          className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          <LayoutDashboard size={20} /> <span>Dashboard</span>
        </button>

        <button 
          className={`nav-item ${activeTab === 'reports' ? 'active' : ''}`}
          onClick={() => setActiveTab('reports')}
        >
          <FileText size={20} /> <span>Reports</span>
        </button>

        <button 
          className={`nav-item ${activeTab === 'inventory' ? 'active' : ''}`}
          onClick={() => setActiveTab('inventory')}
        >
          <Package size={20} /> <span>Inventory Overview</span>
        </button>

        <button 
          className={`nav-item ${activeTab === 'sales' ? 'active' : ''}`}
          onClick={() => setActiveTab('sales')}
        >
          <ShoppingCart size={20} /> <span>Sales Overview</span>
        </button>

        <button 
          className={`nav-item ${activeTab === 'customOrders' ? 'active' : ''}`}
          onClick={() => setActiveTab('customOrders')}
        >
          <Star size={20} /> <span>Custom Orders</span>
        </button>

        <button 
          className={`nav-item ${activeTab === 'userManagement' ? 'active' : ''}`}
          onClick={() => setActiveTab('userManagement')}
        >
          <Users size={20} /> <span>User Management</span>
        </button>
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <button 
          className={`footer-nav-item ${activeTab === 'systemSettings' ? 'active' : ''}`}
          onClick={() => setActiveTab('systemSettings')}
        >
          <Settings size={18} /> <span>Settings</span>
        </button>

        <button className="footer-nav-item logout" onClick={onLogout}>
          <LogOut size={18} /> <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default ManagerSidebar;
