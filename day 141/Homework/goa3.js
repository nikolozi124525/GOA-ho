import React from "react";

function About() {

  const handleClick = () => {
    console.log("About");
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-4xl font-bold text-green-500 hover:text-green-700">
        Welcome to the About Page
      </h1>
      <button
        onClick={handleClick}
        className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        Click me
      </button>
    </div>
  );
}

export default About;
