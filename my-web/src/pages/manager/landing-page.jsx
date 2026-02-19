import { useState } from "react";
import Sidebar from "./sidebarmenu";
import Dashboard from "./dashboard";
import Reports from "./reports";
import InventoryOverview from "./inventoryOverview";
import SalesOverview from "./salesOverview";
import CustomOrders from "./customOrders";
import UserManagement from "./userManagement";
import SystemSettings from "./systemSettings";
import DeliveryOverview from "./deliveriesOverview";
import Messages from "./messages";
import "../../styles/manager/landing-page.css";

export default function ManagerLandingPage() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleNavigate = (page) => {
    setActivePage(page);
  };

  const handleToggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard setActivePage={setActivePage} />;
      case "reports":
        return <Reports />;
      case "inventory":
        return <InventoryOverview />;
      case "sales":
        return <SalesOverview />;
      case "customOrders":
        return <CustomOrders />;
      case "users":
        return <UserManagement />;
      case "settings":
        return <SystemSettings />;
      default:
        return <Dashboard setActivePage={setActivePage} />;
    }
  };

  return (
    <div
      className={`manager-layout ${
        sidebarCollapsed ? "sidebar-collapsed" : ""
      }`}
    >
      <Sidebar
        activePage={activePage}
        onNavigate={handleNavigate}
        collapsed={sidebarCollapsed}
        onToggle={handleToggleSidebar}
      />

      <main className="manager-content">
        <div className="content-inner">{renderPage()}</div>
      </main>
    </div>
  );
}
