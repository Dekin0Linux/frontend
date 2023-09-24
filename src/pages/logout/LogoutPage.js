import React, { useEffect } from 'react';
import authStore from '../../stores/authStore';
import { Link } from 'react-router-dom';
import './logoutPage.scss';

const LogoutPage = () => {
  const store = authStore();
  useEffect(() => {
    store.logout();
  }, [store]);
  return (
    <div className="logoutSection">
      <div className="logoutContainer">
        <h1 className="font5">Rabbit Records</h1>

        <h3>You are now logged out</h3>

        <Link to="/login">
          <button className="formButtons">Log in</button>
        </Link>
      </div>
    </div>
  );
};

export default LogoutPage;
