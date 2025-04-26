import React from "react";

function Contact() {
 
  const handleClick = () => {
    console.log("Contact");
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-4xl font-bold text-red-500 hover:text-red-700">
        Welcome to the Contact Page
      </h1>
      <button
        onClick={handleClick}
        className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-700"
      >
        Click me
      </button>
    </div>
  );
}

export default Contact;
