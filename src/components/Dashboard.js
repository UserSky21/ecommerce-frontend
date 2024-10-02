import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  // Here you can display different views based on user roles
  return (
    <div>
      <h2>Dashboard</h2>
      {/* Add conditional rendering based on user role */}
      <div>
        <p>Welcome! You can see your role-specific actions here.</p>
        {/* Admin section */}
        <div>
          <h3>Admin Actions</h3>
          <button>Add/Delete Users</button>
        </div>
        {role === 'seller' && (
  <div>
    <h3>Seller Section</h3>
    <AddProduct />
  </div>
)}
        {/* Seller section */}
        <div>
          <h3>Seller Actions</h3>
          <button>Add Products</button>
        </div>
        {/* Shopper section */}
        <div>
          <h3>Shopper Actions</h3>
          <button>View Products</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
