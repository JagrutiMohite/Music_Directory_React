import React, { useState } from "react";

export default function Form(props) {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function changeFullName(event) {
    const { name, value } = event.target;

    setFullName((pre) => {
      return {
        ...pre,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    props.onAdd(fullName);
    setFullName({
      fName: "",
      lName: ""
    });
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Login Here..</h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
          onChange={changeFullName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
          onChange={changeFullName}
        />
        <button type="submit" className="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}
