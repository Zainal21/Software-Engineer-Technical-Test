import React from "react";

export default function HeaderContentTitle({ name }) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
      </div>
    </header>
  );
}

HeaderContentTitle.defaultProps = {
  name: "Dashboard",
};
