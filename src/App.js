import React, { useState } from "react";
import Adduser from "./components/users/AddUser";
import UserList from "./components/users/UserList";

const App = () => {
  const [userlist, setuserlist] = useState([]);
  const accept = (uname, uage) => {
    setuserlist((element) => {
      return [
        ...element,
        { name: uname, age: uage, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <Adduser data={accept} />
      <UserList user={userlist} />
    </div>
  );
};
export default App;
