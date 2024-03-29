import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";

const BatteryReplacement = () => {
  const { componentRef, style } = useScrollGrow({ x: -1000 });

  return (
    <motion.div
      style={style}
      className="bg-red-500 h-[415px]  rounded-2xl col-span-12"
      ref={componentRef}
    ></motion.div>
  );
};

export default BatteryReplacement;
