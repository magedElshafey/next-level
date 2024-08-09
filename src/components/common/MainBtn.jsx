import React from "react";

const MainBtn = ({ text, action, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="bg-secondColor flex items-center justify-center text-white  py-3 px-5 rounded-lg  duration-300 hover:bg-mainColor w-[250px] capitalize  "
      onClick={action}
    >
      {text}
    </button>
  );
};

export default MainBtn;
