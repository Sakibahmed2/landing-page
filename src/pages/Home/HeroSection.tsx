import React from "react";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import macbook from "@/assets/images/macbook-exposed.png";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", bounce: 0.5 },
  },
};

const laptop = {
  initial: {
    y: 0,
    scale: 5,
    rotate: 30,
  },
  animate: {
    y: 20,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,

      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <Container className="h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2 place-content-center ">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            className="text-5xl lg:text-8xl font-bold "
            variants={introChildren}
          >
            <span className="text-gray">Don't worry,</span>
            <br />
            <span className="text-[#1D1D1F]">We'll fix it</span>
          </motion.h1>
          <motion.p
            className="text-dark-gray mt-10 mb-5 max-w-[50ch]"
            variants={introChildren}
          >
            Welcome to{" "}
            <span className="text-[#1D1D1F] font-semibold">iRepair</span>, your
            one-stop place for all kinds of
            <span className="text-[#1D1D1F] font-semibold">
              {" "}
              Macbook repairs
            </span>{" "}
            and diagnostics.
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>

        <motion.div
          className=" w-3/4 lg:w-full mx-auto"
          variants={laptop}
          initial="initial"
          animate="animate"
        >
          <img
            className="-rotate-[30deg] h-[95%] object-contain"
            src={macbook}
            alt=""
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
