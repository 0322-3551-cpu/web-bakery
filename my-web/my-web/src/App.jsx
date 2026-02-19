import React, { useState } from 'react'; // Added this
import LoginSection from "./pages/login-section";
import PackerSection from "./pages/packer-section";
import SellerSection from "./pages/seller/seller-section";
import ManagerSection from "./pages/manager-section";

function App() {
  // Define the state here!
  const [userRole, setUserRole] = useState('guest'); 

  return (
    <div className="App">
      {/* Pass the setUserRole function as a prop called onLogin */}
      {userRole === 'guest' && <LoginSection onLogin={setUserRole} />}
      
      {userRole === 'packer' && <PackerSection />}
      {userRole === 'seller' && <SellerSection />}
      {userRole === 'manager' && <ManagerSection />}
    </div>
  );
}

export default App;