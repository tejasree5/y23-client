import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DashboardLayoutBasic from './components/DashboardLayoutBasic';
import Login from './components/Login';

const App = () => {
  // Access user from the Redux state
  const user = useSelector((state) => state.auth?.user);

  // Debugging the value of user
  console.log("User:", user);

  return (
    <Router>
      <Routes>
        {/* Login route */}
        <Route path="/login" element={<Login />} />
        
        {/* Default route */}
        <Route 
          path="/" 
          element={user ? <DashboardLayoutBasic /> : <Login />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
