import React, { useState } from "react";

export default function SongsSearch() {
  const [songsInput, setSongsInput] = useState({
    search: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setSongsInput((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  function handleSubmit(props) {
    props.onAdd(songsInput);
  }

  return (
    <div className="songs">
      <div className="search-container">
        <h2>Start Searching Your Songs!!</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Search.."
            name="search"
            onChange={handleChange}
            value={songsInput.search}
          />
        </form>
      </div>
    </div>
  );
}
