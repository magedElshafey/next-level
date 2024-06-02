import React from "react";

const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-white z-50">
      <div className="w-full h-full flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Spinner;
