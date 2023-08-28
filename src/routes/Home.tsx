import React, { useState } from "react";
import "./Home.sass";
import UserList from "../components/UserList";
import Pagination from "../components/Pagination";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchName, setSearchName] = useState('')

  //maximum pages displayed at pagination
  const lastPage = 20;

  return (
    <div>
      <div>
        <h2>List Users</h2>

        <input
          className="inputSearch"
          type="text"
          name="name"
          placeholder="Search user..."
          onChange={(e) => setSearchName(e.target.value)}
          value={searchName || ""}
        />
        <div className="list listLabel">
          <p>ID</p>
          <p>First Name</p>
          <p>Last Name</p>
          <p>Title</p>
          <p>Date</p>
          <p>Age</p>
          <p>Actions</p>
        </div>

        <UserList 
          searchName={searchName}
          currentPage={currentPage}
        />
       
        <Pagination 
          currentPage={currentPage}
          lastPage={lastPage}
          maxLength={5} 
          setCurrentPage={setCurrentPage}
        /> 

      </div>
    </div>
  );
}

export default Home;
