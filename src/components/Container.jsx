import React from "react";

const Container = ({ children }) => {
  return (
    <div className="  m-20 max-w-6xl	h-200 flex flex-wrap gap-4 p-4 justify-center">
      {children}
    </div>
  );
};

export default Container;
