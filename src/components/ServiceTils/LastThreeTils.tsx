import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";

const LastThreeTils = () => {
  const { style, componentRef } = useScrollGrow({ x: 0 });

  return (
    <>
      <motion.div
        className="bg-red-500 h-[415px]  rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"
        style={style}
        ref={componentRef}
      ></motion.div>
      <motion.div
        className="bg-red-500 h-[415px]  rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"
        style={style}
        ref={componentRef}
      ></motion.div>
      <motion.div
        className="bg-red-500 h-[415px]  rounded-2xl col-span-12 md:col-span-12 lg:col-span-4"
        style={style}
        ref={componentRef}
      ></motion.div>
    </>
  );
};

export default LastThreeTils;
