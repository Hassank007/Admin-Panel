'use client'
import React from 'react';
import Doctor from './Doctor';
import Dashboard from './Dashboard';
const Content = ({ selectedNav }) => {
  let content = null;

  switch (selectedNav) {
    case "dashboard":
      content = <h2>Dashboard Content</h2>;
      break;
    case "doctors":
      content = <Doctor/>;
      break;
    case "admin":
      content = <h2>Admin Content</h2>;
      break;
    case "users":
      content = <h2>Users Content</h2>;
      break;
    case "claims":
      content = <h2>Claims Content</h2>;
      break;
    default:
      content = <h2>Select a navigation item</h2>;
  }

  return (
    <div className="ml-64 ">
      {content}
    </div>
  );
};

export default Content;
