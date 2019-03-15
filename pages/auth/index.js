import React from 'react';

import User from '../../components/User';

const AuthPage = ({ appName }) => (
  <div>
    <h1>The Auth Page - {appName}</h1>
    <User name="John" age="32" />
  </div>
);

AuthPage.getInitialProps = context => {
  console.log(context);
  const promise = new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve({ appName: 'Super App - (Auth)' });
    }, 1000);
  });
  return promise;
};

export default AuthPage;
