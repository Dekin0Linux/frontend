import { Navigate } from 'react-router-dom';
import authStore from '../stores/authStore';
import { useEffect, useState } from 'react';
import Loading from '../components/loading/Loading';
import ErrorPage from './ErrorPage';

const RequireAuth = (props) => {
  const store = authStore();
  const [error, setError] = useState(null);
  //deploy
  // useEffect(() => {
  //   if (store.loggedIn === null) {
  //     store.checkAuth().catch((error) => {
  //       setError(error.message);
  //     });
  //   }
  // }, []);
  if (store.loggedIn === null) {
    // return <div>Loading</div>;
    return <Loading />;
  }
  //if not logged in redirect to log in page
  if (store.loggedIn === false) {
    return (
      <div>
        <Navigate to="/login" />
      </div>
    );
  }
  if (error) {
    return <ErrorPage message={error} />;
  }
  return <div>{props.children}</div>;
};

export default RequireAuth;
