import React from "react";
import { motion } from "framer-motion";
import useScrollGrow from "@/hooks/useScrollGrow";

const DataRecovery = () => {
  const { style, componentRef } = useScrollGrow({ x: 500 });

  return (
    <motion.div
      className="bg-red-500 h-[415px]  rounded-2xl col-span-6 lg:col-span-7"
      ref={componentRef}
      style={style}
    ></motion.div>
  );
};

export default DataRecovery;
