import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import "./User.scss";

function User() {
  const {id} = useParams();
  const location = useLocation()
  console.log(location.state.firstname);
  
 
  useEffect(() => {
   
  }, []);
  
  return (
    <div>
      <div className="back">
        <a href="/" className="backLink">Back</a>
      </div>
      <div className="user">
        <img 
          className="userImg"
          src={location.state.photo}
          alt="userImg"
        />

        <h2 className="">{location.state.firstname} {location.state.lastname}</h2>

        <h3 className="title">{location.state.title}</h3>
      </div>

      <div className="infoUser">
        <Link to="/details/detailsInfo" className={location.pathname!=='/details/detailsInfo' ? 'infoEach_inactive' : 'infoEach_active' }> Info </Link>
        <Link to="/details/detailsLocation" className={location.pathname!=='/details/detailsLocation' ? 'infoEach_inactive' : 'infoEach_active' }> Location </Link>
        <Link to="/details/detailsLogin" className={location.pathname!=='/details/detailsLogin' ? 'infoEach_inactive' : 'infoEach_active' }> Login </Link>
      </div>

      <div className="outlet">
        <Outlet/>
      </div>
    </div>
  );
}

export default User;
