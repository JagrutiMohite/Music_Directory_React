import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

export default function Header() {
  return (
    <div>
      <header>
        <h1>
          <PlayCircleFilledIcon className="icon" />
          Music App
        </h1>
      </header>
    </div>
  );
}
