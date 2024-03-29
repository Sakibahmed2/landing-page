import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type TScrollProps = {
  x?: number;
};

const useScrollGrow = ({ x }: TScrollProps) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.5 1"],
  });

  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityValue = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const xValue = useTransform(scrollYProgress, [0, 1], [x, 1]);

  const style = {
    scale: scaleValue,
    opacity: opacityValue,
    x: xValue,
  };
  return { componentRef, style };
};

export default useScrollGrow;
