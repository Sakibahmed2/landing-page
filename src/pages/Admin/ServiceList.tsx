import { getServices } from "@/api/admin/service/Service.api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const ServiceList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  console.log({ isLoading, data, isError });
  if (isLoading) {
    return <p>Loading...........</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <div>
      {data?.data?.map((item) => (
        <h1>{item?.name}</h1>
      ))}
    </div>
  );
};

export default ServiceList;
