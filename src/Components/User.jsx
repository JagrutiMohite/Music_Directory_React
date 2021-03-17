import React, { useState } from "react";
import SongsSearch from "./SongsSearch";
import Songs from "./Songs";

export default function User(props) {
  const { songsPlayList, setSongsPlayList } = useState([]);

  function addSong(songsList) {
    setSongsPlayList((pre) => {
      return [...pre, songsList];
    });
  }

  return (
    <div>
      <div className="user">
        <h1>User is successfully Logged in</h1>
        <p>{props.fName}</p>
        <p>{props.lName}</p>
      </div>
      <SongsSearch onAdd={addSong} />
      {songsPlayList.map((item, index) => {
        return (
          <Songs key={index} id={index} title={item.title} play={item.play} />
        );
      })}
    </div>
  );
}
