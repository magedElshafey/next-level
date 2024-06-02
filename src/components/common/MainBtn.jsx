import React from "react";

const MainBtn = ({ text, action }) => {
  return (
    <button
      className="bg-secondColor flex items-center justify-center text-white w-fit p-3  duration-300 hover:bg-mainColor"
      onClick={action}
    >
      {text}
    </button>
  );
};

export default MainBtn;
