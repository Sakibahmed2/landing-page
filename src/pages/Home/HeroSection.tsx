import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import React from "react";
import macbook from "@/assets/images/macbook-exposed.png";

const HeroSection = () => {
  return (
    <Container className="h-[calc(100vh-64px)] grid grid-cols-2 place-content-center ">
      <div>
        <h1 className="text-8xl font-extrabold ">
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
      <div>
        <img src={macbook} alt="" />
      </div>
    </Container>
  );
};

export default HeroSection;
