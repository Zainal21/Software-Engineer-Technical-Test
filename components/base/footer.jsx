import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between px-6 py-4 bg-indigo-600 sm:flex-row">
      <Link href="/">
        <a className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
          {" "}
          Frontend Test
        </a>
      </Link>

      <p className="py-2 text-gray-800 dark:text-white sm:py-0">
        Made by Muhamad Zainal Arifin
      </p>
    </footer>
  );
}
