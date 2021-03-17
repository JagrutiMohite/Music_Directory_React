import React from "react";

export default function Songs(props) {
  return (
    <div className="songs-conatiner">
      <p>{props.title}</p>
      <p>{props.play}</p>
    </div>
  );
}
