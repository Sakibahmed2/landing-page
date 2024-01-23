import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-[1220px] h-full px-[20px]  mx-auto bg-green-500">
      {children}
    </div>
  );
};

export default Container;
