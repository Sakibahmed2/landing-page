import laptop from "@/assets/images/macbook.jpg";
import useScrollGrow from "@/hooks/useScrollGrow";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const WhoWeAreSection = () => {
  const { style, componentRef } = useScrollGrow({ x: -200 });

  const textRef = useRef<HTMLDivElement>(null);

  const textAnimate = {
    hidden: {
      x: 500,
      scale: 0.4,
      opacity: 0,
    },
    visible: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  const inView = useInView(textRef);
  console.log(inView);

  const textControls = useAnimation();

  useEffect(() => {
    if (inView) {
      textControls.start("visible");
    } else {
      textControls.start("hidden");
    }
  }, [inView]);

  return (
    <div className="grid grid-cols-12 place-content-center overflow-hidden my-40">
      <motion.div className="col-span-6" ref={componentRef} style={style}>
        <img src={laptop} alt="" />
      </motion.div>

      <motion.div
        className="col-span-6 w-[600px] my-auto"
        ref={textRef}
        variants={textAnimate}
        initial="hidden"
        animate={textControls}
      >
        <h1>Who we are</h1>
        <p className="mt-20 mb-10">
          At iRepair, we love MacBooks as much as you do. That’s why we offer
          fast, reliable, and affordable repair services for all kinds of
          MacBooks. Whether you need a screen replacement, a battery upgrade, or
          a software fix, we have the skills and experience to get your MacBook
          back to its best. We serve both individuals and businesses in
          Bangladesh, and we guarantee your satisfaction. Don’t let a broken
          MacBook ruin your day. Contact iRepair today and let us take care of
          it.
        </p>
        <div className="flex">
          <p className="w-full text-center max-w-[260px] text-6xl text-primary">
            98%{" "}
            <span className="text-black text-sm block">
              Successful repairs{" "}
            </span>
          </p>
          <p className="w-full text-center max-w-[260px] text-6xl text-primary">
            2k+{" "}
            <span className="text-black text-sm block">
              Successful repairs{" "}
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default WhoWeAreSection;
