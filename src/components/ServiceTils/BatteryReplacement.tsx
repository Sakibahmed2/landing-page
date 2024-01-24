import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";

const BatteryReplacement = () => {
  const componentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.2 1"],
  });

  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityValue = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const xValue = useTransform(scrollYProgress, [0, 1], [-1000, 1]);

  return (
    <motion.div
      style={{
        scale: scaleValue,
        opacity: opacityValue,
        x: xValue,
      }}
      className="bg-red-500 h-[415px]  rounded-2xl col-span-12"
      ref={componentRef}
    ></motion.div>
  );
};

export default BatteryReplacement;
