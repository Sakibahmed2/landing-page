import React from "react";
import { motion } from "framer-motion";
import useScrollGrow from "@/hooks/useScrollGrow";

const HardDiskReplacement = () => {
  const { componentRef, style } = useScrollGrow({ x: -1000 });

  return (
    <motion.div
      className="bg-red-500 h-[415px]  rounded-2xl col-span-12"
      style={style}
      ref={componentRef}
    ></motion.div>
  );
};

export default HardDiskReplacement;
