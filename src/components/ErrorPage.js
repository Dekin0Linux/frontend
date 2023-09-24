import React from 'react';
import Alert from 'react-bootstrap/Alert';

const ErrorPage = ({ message }) => {
  return (
    <>
      <Alert
        // className="errorContainer"
        variant="danger"
      >
        <h4>{message}</h4>
      </Alert>
    </>
  );
};

export default ErrorPage;
