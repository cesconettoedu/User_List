import React, { useState, useEffect } from "react";
import "./UserList.scss";
import { Link } from "react-router-dom";

export type Props = {
  searchName: string;
  currentPage: number;
};

function UserList({ currentPage, searchName }: Props) {
  const [allUsers, setAllUsers] = useState([]);

  interface Person {
    login: {
      uuid: string;
    };
    id: {
      name: string;
      value: string;
    };
    cell: string;
    email: string;
    last: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    // date: string;
    dob: {
      age: number;
    };
    picture: {
      large: string
    } 
  }

  
  const getAllUsers = () => {
    fetch(`https://randomuser.me/api/?page=${currentPage}&results=10&seed=abc`)
      .then((response) => response.json())
      .then((res) => {
        let usersResult = res.results
        if(searchName !== ''){
          usersResult = usersResult.filter((app: { name: { first: string; }; }) =>  app.name.first.toUpperCase().includes(searchName.toUpperCase()))
        }
        setAllUsers(usersResult)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, [currentPage, searchName]);

  return (
    <div>
      {allUsers.map((user: Person) => {
        //console.log(user);

        
        return (
          <div className="list" key={user.login.uuid}>
            <div className="column extend">
              {user.id.name}
              {user.id.value}
            </div>
            <div className="column">{user.name.first}</div>
            <div className="column">{user.name.last}</div>
            <div className="column">{user.name.title}</div>
            <div className="column">date</div>
            <div className="column">{user.dob.age}</div>
            <Link 
              className="viewProfile" 
              to={{ 
                pathname: '/user/userProfile'}}
                state={{
                  firstname: user.name.first, 
                  lastname: user.name.last,
                  title: user.name.title,
                  photo: user.picture.large,
                  age: user.dob.age,
                  
                }}                
            >
              View profile
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default UserList;
