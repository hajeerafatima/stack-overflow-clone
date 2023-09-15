import React from 'react'
import './Users.css'
import LeftSidebar from '../../component/LeftSidebar/LeftSidebar'
import { useLocation } from 'react-router-dom'
import UsersList from './UsersList'

const hour = new Date().getHours();
   const cssStyle = {};

   if (hour >= 1 && hour < 19) {
     cssStyle.backgroundColor = " rgb(0,206,209)";
   } else {    
    cssStyle.backgroundColor = "rgb(81, 78, 78)";
   }

const Users = () => {

  const location = useLocation()

  return (
    <div style={cssStyle} className="home-container-1">
    <div className="home-container-1">
    <LeftSidebar />
    <div className="home-container-2" style={{ marginTop: "30px" }}>
      <h1 style={{ fontWeight: "400" }}>Users</h1>
      <UsersList />
    </div>
  </div>
  </div>
);
};
export default Users