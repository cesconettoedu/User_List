import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./User.scss";

function User() {
  const location = useLocation()
  
  const [info, setInfo] = useState(false);
  const [loc, setLoc] = useState(false);
  const [login, setLogin] = useState(false);
 
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

      <div >
        <button 
          onClick={()=>{setInfo(true); setLoc(false); setLogin(false)}}
          className={info ? 'infoEach_active' : 'infoEach_inactive' }
        > 
          Info 
        </button>

         <button 
          onClick={()=>{setInfo(false); setLoc(true); setLogin(false)}}
          className={loc ? 'infoEach_active' : 'infoEach_inactive' }
        > 
          Location 
        </button>

         <button 
          onClick={()=>{setInfo(false); setLoc(false); setLogin(true)}}
          className={login ? 'infoEach_active' : 'infoEach_inactive' }
        > 
          Login 
        </button>
      </div>

      <div className="content">
        {info && 
          <div>
            <h3>First name</h3>
            <h4>{location.state.firstname}</h4>
          </div>
        }
      </div>
    </div>
  );
}

export default User;
