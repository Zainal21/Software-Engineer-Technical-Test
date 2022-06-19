import React from "react";

export default function PageTitle(props) {
  return (
    <header className="bg-white shadow mt-5 block">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">{props.name}</h1>
      </div>
    </header>
  );
}
