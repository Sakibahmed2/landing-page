import { getServices } from "@/api/admin/service/Service.api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const ServiceList = () => {
  const { data, isLoading } = useQuery({
    queryKey: [""],
    queryFn: getServices,
  });

  if (isLoading) {
    return <p>Loading...........</p>;
  }

  console.log({ isLoading, data });

  return (
    <div>
      {data?.data.map((item) => (
        <h1>{item.name}</h1>
      ))}
    </div>
  );
};

export default ServiceList;
