import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import React from "react";
import macbook from "@/assets/images/macbook-exposed.png";

const HeroSection = () => {
  return (
    <Container className="h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2 place-content-center ">
      <div>
        <h1 className="text-5xl lg:text-8xl font-bold ">
          <span className="text-gray">Don't worry,</span>
          <br />
          <span className="text-[#1D1D1F]">We'll fix it</span>
        </h1>
        <p className="text-dark-gray mt-10 mb-5 max-w-[50ch]">
          Welcome to{" "}
          <span className="text-[#1D1D1F] font-semibold">iRepair</span>, your
          one-stop place for all kinds of
          <span className="text-[#1D1D1F] font-semibold">
            {" "}
            Macbook repairs
          </span>{" "}
          and diagnostics.
        </p>
        <Button>Book a service</Button>
      </div>
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
