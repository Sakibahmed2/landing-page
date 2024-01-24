import Container from "@/components/Container";
import BatteryReplacement from "@/components/ServiceTils/BatteryReplacement";
import ChipsetReplacement from "@/components/ServiceTils/ChipsetReplacement";
import DataRecovery from "@/components/ServiceTils/DataRecovery";
import HardDiskReplacement from "@/components/ServiceTils/HardDiskReplacement";
import React from "react";

const ServicesSection = () => {
  return (
    <div className="overflow-hidden">
      <Container className="my-40 ">
        <div className="text-center flex flex-col items-center">
          <h1>Services that we provide.</h1>
          <p className="max-w-[80ch] mt-10 mb-20">
            We provide various computer repair services and solutions for our
            new and regular customers. Feel free to find out more below.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <BatteryReplacement />
          <ChipsetReplacement />
          <DataRecovery />
          <HardDiskReplacement />
          <div className="bg-red-500 h-[415px]  rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
          <div className="bg-red-500 h-[415px]  rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
          <div className="bg-red-500 h-[415px]  rounded-2xl col-span-12 md:col-span-12 lg:col-span-4"></div>
        </div>
      </Container>
    </div>
  );
};

export default ServicesSection;
