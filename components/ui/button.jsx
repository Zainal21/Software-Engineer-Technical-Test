import React from "react";
import cn from "classnames";

export default function Button({ name, className, handleClick }) {
  return (
    <button className={cn(`px-5 py-3`, className)} onClick={handleClick}>
      {name}
    </button>
  );
}
