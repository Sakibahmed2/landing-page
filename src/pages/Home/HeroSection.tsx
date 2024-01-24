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

const HeroSection = () => {
  return (
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

      <div className="mt-10 w-3/4 lg:w-full mx-auto">
        <img
          className="-rotate-[30deg] h-[95%] object-contain"
          src={macbook}
          alt=""
        />
      </div>
    </Container>
  );
};

export default HeroSection;
