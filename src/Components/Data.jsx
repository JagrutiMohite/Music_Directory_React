import React, { useState } from "react";
import Form from "./Form";
import User from "./User";

export default function Data() {
  const [user, setUser] = useState([]);
  const [userIsRegistered, setUserIsRegistered] = useState(true);

  function handleSubmit(fullName) {
    setUser((pre) => {
      return [...pre, fullName];
    });
    setUserIsRegistered(false);
  }
  return (
    <div>
      {userIsRegistered ? (
        <Form onAdd={handleSubmit} />
      ) : (
        user.map((newUser, index) => {
          return (
            <User
              key={index}
              id={index}
              fName={newUser.fName}
              lName={newUser.lName}
            />
          );
        })
      )}
    </div>
  );
}
