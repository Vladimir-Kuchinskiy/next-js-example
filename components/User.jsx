import React from 'react';

const User = ({ name, age }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <style jsx>{`
        div {
          border: 1px solid #eee;
          box-shadow: 0 2p 3px #ccc;
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default User;
