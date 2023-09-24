import React from 'react';
import SignupForm from './SignupForm';
import './signup.scss';

const SignupPage = () => {
  return (
    <div className="startPage">
      <div className="startImage">
        <h1 className="font5">Rabbit Records</h1>
        <span>
          Photo by
          <a href="https://unsplash.com/@shichijiro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Wei Fukuyama
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/photos/Rr9K_FR-0-w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </div>
      <div className="signForm font1">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
