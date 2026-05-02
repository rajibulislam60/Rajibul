import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-[95%] md:w-[790px] lg:w-[980px] xl:w-[1290px] mx-auto">
      {children}
    </div>
  );
};

export default Container;
