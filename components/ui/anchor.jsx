import Link from "next/link";
import React from "react";
import cn from "classnames";

export default function anchor({ to, name, className }) {
  return (
    <Link href={to}>
      <a className={cn(`px-5 py-3`, className)}>{name}</a>
    </Link>
  );
}
