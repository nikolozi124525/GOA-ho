import React from "react";

function Home() {

  const handleClick = () => {
    console.log("Home");
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-4xl font-bold text-blue-500 hover:text-blue-700">
        Welcome to the Home Page
      </h1>
      <button
        onClick={handleClick}
        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Click me
      </button>
    </div>
  );
}

export default Home;
