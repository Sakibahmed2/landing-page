import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-[1220px]  px-[20px]  mx-auto ">{children}</div>
  );
};

export default Container;
